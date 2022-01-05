//HÄMTA ETT SPECIFIKT DOKUMENT BASERAT PÅ ID
    // metod: .get()
    // För att skapa en sök-funktion används istället .where() som söker efter matches i varje doc

//Connecta till databasen
const {connect} = require('../database.js')
const db = connect();

const USERS = 'users'

/* getOne();
 */
async function getOne(id) {
/*     console.log('Looking for TheWorld...')
 */
    //doc-ID som tagits direkt från firestore
    const docId = id || 'd7UliB35FWWOCEeZfRpQ'

    //Hämta snapshot
    const docSnapshot = await db.collection(USERS).doc(docId).get()

    //Kontrollera att datan finns
    if( !docSnapshot.exists ){
/*         console.log('Could not find TheWorld.')
 */        return {}
    }

    //Om inte inte finns (alltså den finns) så spara datan i variabel
    const data = await docSnapshot.data()

    return data

/*     console.log('Found: ', data);
 */
}

