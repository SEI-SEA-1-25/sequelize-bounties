const {sequelize} = require("./models");

try{
    async function bounty(){
        await sequelize.sync();
    }
} catch(error){
    console.log(error);
}

bounty();