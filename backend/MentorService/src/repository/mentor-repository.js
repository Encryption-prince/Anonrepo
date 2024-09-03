const {  Mentor }=require('../models/index');
const {Op} = require('sequelize');

class MentorRepository{
    
    async createMentor(data){
        try {
            const mentor=await Mentor.create(data);
            return mentor;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getMentor(mentorId){
        try {
            const mentor = await Mentor.findByPk(mentorId);
            return mentor;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllMentors(filter){
        try {
        if(filter.name){
            const mentors = await Mentor.findAll({
                where:{
                    name: {
                        [Op.startsWith]:filter.name
                    }
                }
        });
        return mentors;
        }
            const mentors = await Mentor.findAll();
            return mentors;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }

//     async update(flightId, data) {
//         try {
//            await Flights.update(data, {
//                where: {
//                    id: flightId
//                }
//            });
//            return true;
//        } catch (error) {
//            console.log("Something went wrong in the repository layer");
//            throw {error};
//        }
//    }

async deleteMentor(mentorId){
    try{
        await Mentor.destroy({
            where:{
                id: mentorId
            }
        });
        return true;
    }catch(error){
        console.log("something went wrong in repository layer");
        throw {error};
    }
}
}

module.exports =MentorRepository;