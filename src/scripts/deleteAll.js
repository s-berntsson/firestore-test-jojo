//Connecta till databasen
const {connect} = require('../database.js')
const db = connect();

const USERS = 'users'


deleteAll();

async function deleteAll(){
    console.log('Clearing all documents...')

     //Hämta reference till datan
     const usersRef = db.collection(USERS)
    
     //Hämta snapshot av datan
     const usersSnapshot = await usersRef.get()
 
     //Kontrollera att det finns något att ta bort
     if ( usersSnapshot.empty ) {
         console.log('No documents to delete.')
         return
     }

    //Ta bort varje object
     usersSnapshot.forEach(obj => {
        usersRef.doc(obj.id).delete()
        console.log('Delete!')
     })
 
}