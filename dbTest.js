const models = require('./models')


ee// const mkBounty = async () => {
const crud1 = async () => {

   models.bounty.create({
      name: 'Hans Solo',
      wantedFor: 'owing money',
      reward: 50000,
      captured: false
    })
}

crud1()


// const mkHunter = async () => {
const crud2 = async () => {

   models.bounty.findOrCreate({
      name: 'Boba Fett',
      client: 'Jabba El Hut',
      active: true
    })
}

crud2()