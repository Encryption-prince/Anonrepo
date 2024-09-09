const {User,Role} = require('../models/index');
//const user = require('../models/user');

class UserRepository {
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id:userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getById(userId){
        try {
            const user = await User.findByPk(userId,{
                attributes: ['email','id']
            });
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getByEmail(userEmail){
        try {
            const user = await User.findOne({where:{
                email:userEmail
            }});
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async isMentor(userId){
        try{
            const user = await User.findByPk(userId);
            if (!user) {
                console.log(`User with ID ${userId} not found`);
                return false;  // or throw an error if you prefer
            }
            const mentorRole = await Role.findOne({
                where:{
                    name:'mentor'
                }
            });
            return user.hasRole(mentorRole);
        }catch(error){
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    async isMentee(userId){
        try{
            const user = await User.findByPk(userId);
            const menteeRole = await Role.findOne({
                where:{
                    name:'mentee'
                }
            });
            return user.hasRole(menteeRole);
        }catch(error){
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;