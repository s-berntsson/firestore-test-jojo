const admin = require("firebase-admin");

const serviceAccount = require("./secrets/firebase-key.json");

function connect() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    const db = admin.firestore()  // db = database
    return db
}   

//Skapa timestamp (görs här tack vare admin-objektet)
const Timestamp = admin.firestore.Timestamp

function getTimeStampNow() {
  const now = Math.round(Date.now() / 1000)
  return new Timestamp(now, 0)
}

module.exports = { connect, getTimeStampNow }