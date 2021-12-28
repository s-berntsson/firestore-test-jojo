//Connecta till databasen
const {connect, getTimeStampNow} = require('../database.js')
const db = connect();

const USERS = 'users'

addOne();

async function addOne() {
    console.log('Adding a new document...');
    const object = {
        name: 'Trish Una',
        email: 'spicegirl@mail.com',
        lastOnline: getTimeStampNow()
    }

    const docRef = await db.collection(USERS).add(object);
    console.log('Added document with ID: ', docRef.id)
}