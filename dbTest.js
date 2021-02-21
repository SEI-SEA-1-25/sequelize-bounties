const db = require("./models")
// try {
// } 
// catch (error) {
//   console.log(error)
// }
//CREATE 
async function creating() {
    try {
        // const bounty = await db.bounty.create({
        //     name: "Han Solo",
        //     wantedFor: "Owing Money",
        //     reward: 500000,
        //     captured: false
        // })
        // const hunter = await db.hunter.create({
        //     name: "Bobba Fett",
        //     client: "Jabba the Hut",
        //     active: true
        // })
        // const options = {
        //     where: {name: "Dengar"},
        //     defaults: {client: "Mercurial Swift", active: false}
        // }
        // const [hunter, created] = await db.hunter.findOrCreate(options)


    } catch (error) {
        console.log(error)
    }
}

// creating()

//READ 
async function reading(){
    try {
        // const bounties = await db.bounty.findAll()
        // bounties.forEach(bounty =>{
        //     console.log(bounty)
        // })

        // const activeHunters = await db.hunter.findAll({where: {active: true}})
        // activeHunters.forEach(hunter => {
        //     console.log(hunter)
        // })
    } catch (error) {
        console.log(error)
    }
}

// reading()

//UPDATE
async function updating(){
    try {
        // const updateCaptured = await db.bounty.update({
        //     captured: true
        // }, {
        //     where: {
        //         name: "Han Solo"
        //     }
        // })
        // console.log(updateCaptured)
    } 
    catch (error) {
      console.log(error)
    }

}
// updating()

//DESTROY
async function destroying(){
    try {
        // const destroyDengar = await db.hunter.destroy({
        //     where: {
        //         name: "Dengar"
        //     }
        // })
    } 
    catch (error) {
      console.log(error)
    }

}
// destroying()
