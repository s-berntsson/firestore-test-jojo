//HÄMTA ALLA DOCS I EN COLLECTION

//Connect to database
const {connect} = require('../database.js')
const db = connect();

const USERS = 'users'

getAll();

async function getAll() {

    console.log('Getting all documents ...')
    
    //Hämta reference till datan
    const usersRef = db.collection(USERS)
    
    //Hämta snapshot av datan
    const usersSnapshot = await usersRef.get()

    //Kontrollera att datan finns
    if ( usersSnapshot.empty ) {
        console.log('No documents in collection')
        return
    }

    let array = [];

    //Om den finns --> spara i listan
    await usersSnapshot.forEach(async docRef => {
        const data = await docRef.data()
        data.id = docRef.id
        array.push(data)
    })

    console.log('Documents that got got: ', array)
}
