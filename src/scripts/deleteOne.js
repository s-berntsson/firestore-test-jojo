//Connecta till databasen
const {connect, getTimeStampNow} = require('../database.js')
const db = connect();

const USERS = 'users'

deleteOne();

async function deleteOne(id) {
    console.log('Deleting a document...')

    const docId = id || 'dLHDrydDpGJlRrg7Xo7P'

    const docRef = db.collection(USERS).doc(docId)

    //Finns dokumentet jag vill ta bort?
    const docSnapshot = await docRef.get()

    console.log('Exists? ', docSnapshot.exists)

    //Ta bort dokumentet
    const result = await docRef.delete()

    console.log('Deleted, result: ', result)
}