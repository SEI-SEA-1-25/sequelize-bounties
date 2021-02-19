const db = require('./models')

// async function creating() {
//     try {
//         const person = await db.bounty.create({
//             name: 'Han Solo',
//             wantedFor: 'Owing Money',
//             reward: 500000,
//             captured: false
//         })
//         console.log(bounty)
//     } catch (error) {
//         console.log(error)
//     }
// }

async function creating() {
    try {
        const person = await db.hunter.create({
            name: 'Bobba Fett',
            client: 'Jabba the Hut',
            active: true
        })
        console.log(hunter)
    } catch (error) {
        console.log(error)
    }
}

creating()

// async function reading() {
//     try {

//     } catch(error) {
//         console.log(error)
//     }
// }

// reading()