// make sure to add the ./ to indicate this is a folder in the directory
const models = require('./models')    


// crud1
// create an instance of data for the bounties table
// bounties or bounty? whatever you set your model name to (second line - models:generate)
 // remember to invoke the function!
const crud1 = async () => {
  models.bounty.create({                
    name: 'Han Solo',
    wantedFor: 'Owing Money',
    reward: 500000,
    captured: false
  })
}
//  crud1()                                



// crud2
// create an instance of data for the hunters table
const crud2 = async () => {
  models.hunter.create({
    name: 'Boba Fett',
    client: 'Jabba the Hutt',
    active: true
  })
}
// crud2()



//crud3
// this avoids making duplicates, among other things
const crud3 = async  () => {
  models.hunter.findOrCreate({
    where: {
      name: 'Dengar',
      client: 'Mercurial Swift',
      active: false
    }
  })

}
 // crud3()



//crud 4
// finds all bounties
const crud4 = async () => {
  try {
    const allBounties = await models.bounty.findAll()      // Because there are subsequent lines, await is required

    console.log(allBounties)
  } catch (err) {
    console.log(err)
  }
}
// crud4()



// crud5
//finds all hunters who are active
const crud5 = async () => {
  try {
    const activeHunters = await models.hunter.findAll({
      where: {
        active: true 
      }
    })
    console.log(activeHunters)
  } catch (err) {
    console.log()
  }
}
// crud5()



// crud6
// updating Han Solo to captured. this requires two seperate objects
// remember that where must be nested
const crud6 = async () => {
  try {
    models.bounty.update({
      captured: true
    }, {
      where: {
        name: 'Han Solo'
      }
    })
  } catch (err) {
    console.log(err)
  }
}
// crud6()



//crud7
// lets destroy a file!
const crud7 = async () => {
  try {
    models.hunter.destroy({
      where: {
        name: 'Dengar'
      }
    })
  } catch (err) {
    console.log(err)
  }
}
// crud7()
    






// const crudEx3 = async () => {
// const [hunter, created] = await models.hunter.findOrCreate ({
//     where: { name: 'Dengar' },
//     defaults: {
//       client: 'Boba Fett',
//       active: true
//     }
//   });
// }
// console.log(created); // The boolean indicating whether this instance was just created

// crud3Ex()



const associations1 = async () => {
  const hanSolo = await models.bounty.findOne({
    where: {
      name: 'Han Solo'
    }
  })
  // console.log(hanSolo)
  const bobaFett = await models.hunter.findOne({
    where: {
      name: 'Boba Fett'
    }
  })
  hanSolo.addHunter(bobaFett)
}
associations1()