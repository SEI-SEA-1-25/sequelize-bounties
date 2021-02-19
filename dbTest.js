const models = require('./models')
// Make a bounty with a name of Han Solo, 
// wantedFor of Owing Money, 
// reward of 500000, and 
// captured of false.
async function createBounty(){
    try{
        const createBounty = await models.bounty.create({
            name: 'Han Solo',
            wantedFor: 'Owing Money',
            reward: 500000,
            captured: false
        })
        console.log(`creating new bounty: ${createBounty.name}`)
    }catch(error){
        console.log(error)
    }
}
//createBounty()
// Make a hunter with a name of Bobba Fett, 
// a client of Jabba the Hut, and an active of true.
async function createHunter(){
    try{
        const newHunter = await models.hunter.create({
            name: 'Danger',
            client: 'Mercurial swift',
            active: false
        })
        console.log(`created new hunter ${newHunter.name}`)
    }catch(error){
        console.log("erorrrrrrrrrrrrrr",error)
    }
}
//createHunter()
// Make a hunter with a name of Dengar, a client of Mercurial Swift, and an active of false. Try to do this using findOrCreate (knowing that there isn't one to find, and that sequelize will create it).
// Find all bounties, assign them to a variable, and console.log them.
async function findAllBounties(){
    try {
        const bounties = await models.bounty.findAll()
        bounties.forEach(bounty => {
            console.log(bounty.name)
        })
    } catch(error){
        console.log(error)
    }
}
//findAllBounties()
// Find all hunters with active = true, assign them to a variable, and console.log them.
async function findActiveHunters(){
    try{
        const hunters = await models.hunter.findOne({
            where: {
                active: true
            }
        })
        console.log(hunters.name)
    }catch(error){
        console.log(error)
    }
}
//findActiveHunters()
// Modify Han Solo to have a captured of true.
async function modifyCaptured (){
    try{
        const captured = await models.bounty.update({
            captured: true},{
                where: {
                    
                    captured: null
                }
            }
        )
            
    } catch(error){
        console.log(error)
    }
}
//modifyCaptured()
// Delete Dengar. Nobody remembers this guy anyway.
async function deleteDanger(){
    try{
        const hunter = await models.hunter.destroy({
            where:{
                id: 'Danger'
            }
        })
    }catch(error){
        console.log(error)
    }
}
//deleteDanger()
// Ok recreate Dengar. The deletion was just for practice. We'll actually need him later.