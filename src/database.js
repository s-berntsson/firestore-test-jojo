const admin = require("firebase-admin");

const serviceAccount = require("./secrets/firebase-key.json");

function connect() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    const db = admin.firestore()  // db = database
    return db
}   

module.exports = { connect }