//Connecta till databasen
const {connect, getTimeStampNow} = require('../database.js')
const db = connect();

const USERS = 'users'

//Hämta jsondata
const documents = require('../secrets/users.json');

populate();

async function populate() {

    documents.forEach(async (obj) => {
        //Lägg till timestamp för varje objekt
        const newObject = {
            ...obj,
            lastOnline: getTimeStampNow()
        }

        //Lägg till det nya objektet i collectionen
        const docRef = await db.collection(USERS).add(newObject)  //await krävs bara om du vill göra ngt med ex. ID innan nästa loop
        console.log('Added document with ID: ', docRef.id);
    })

}