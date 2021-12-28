//Connecta till databasen
const {connect, getTimeStampNow} = require('../database.js')
const db = connect();

const USERS = 'users'


updateOne();

async function updateOne(id) {
    console.log('Updating a document...')

    const docId = id || 'ERJ7EGSo24U0tuv1zvTV'

    const updates = {
        email: 'king.crimson@evilmail.com',
        lastOnline: getTimeStampNow(),
    }

    const settings = { merge: true } //så att den bara ändrar det som anges, inte skriver över allt

    await db.collection(USERS).doc(docId).set(updates, settings)
}