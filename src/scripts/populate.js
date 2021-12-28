//Connecta till databasen
const {connect, getTimeStampNow} = require('../database.js')
const db = connect();

const USERS = 'users'

const documents = [
    {
        name: 'Jotaro Kujo',
        email: 'star.platinum@joestar.com',
        lastOnline: getTimeStampNow()
    },
    {
        name: 'Joseph Joestar',
        email: 'hermit.purple@joestar.com',
        lastOnline: getTimeStampNow()
    },
    {
        name: 'Kakyoin Noriaki',
        email: 'hierophant.green@goodmail.com',
        lastOnline: getTimeStampNow()
    },
    {
        name: 'Dio Brando',
        email: 'the.world@evilmail.com',
        lastOnline: getTimeStampNow()
    },
    {
        name: 'Jolyne Kujo',
        email: 'stone.free@joestar.com',
        lastOnline: getTimeStampNow()
    }
]

populate();

async function populate() {

    documents.forEach(async (obj) => {
        const docRef = await db.collection(USERS).add(obj)
        console.log('Added document with ID: ', docRef.id);
    })

}