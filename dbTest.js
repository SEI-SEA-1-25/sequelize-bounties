const models = require('./models')


const mkBounty = async () => {
   models.bounty.create({
      name: 'Hans Solo',
      wantedFor: 'owing money',
      reward: 50000,
      captured: false
    })
}

mkBounty()


const mkHunter = async () => {
   models.bounty.findOrCreate({
      name: 'Boba Fett',
      client: 'Jabba El Hut',
      active: true
    })
}

mkHunter()