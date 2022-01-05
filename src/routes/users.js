// Router setup
const express = require('express')
const router = express.Router()

//Connecta till databasen
const { connect } = require('../database.js')
const db = connect();
const USERS = 'users'

// Routes
router.get('/:id', async (req, res) => {
    let user = await getOne(req.params.id)
    res.send(user)
})

router.get('/', async (req, res) => {
    let users = await getAll()
    res.send(users)
})

router.put('/:id', async (req, res) => {
    const result = await updateOne(req.params.id, req.body)
    res.status(result.status).send(result.message)
})


// Callbacks

async function getOne(id) {

    const docSnapshot = await db.collection(USERS).doc(id).get()

    const data = await docSnapshot.data()

    return data
}

async function getAll() {

    const usersRef = db.collection(USERS)

    const usersSnapshot = await usersRef.get()

    let users = [];

    usersSnapshot.forEach(snapshot => {
        const data = snapshot.data()
        data.id = snapshot.id
        users.push(data)
    })

    return users
}

async function updateOne(id, body) {

    //Kontrollera ifall det finns otillåtna keys
    const keys = Object.keys(body)
    const badKeys = keys.filter(key => key !== ("name" || "email" || "lastOnline")) //Går fof att skicka flera keys med samma namn :(

    if(badKeys.length > 0){
        
        const result = {
            message: 'Object can only include name, email and/or lastOnline.',
            status: 400
        }

        return result

    }else{
        const settings = { merge: true } //så att den bara ändrar det som anges, inte skriver över allt
    
        await db.collection(USERS).doc(id).set(body, settings)
    
        const result = {
            message: 'Successful update',
            status: 200
        }
    
        return result

    }

}



module.exports = { router }