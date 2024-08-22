const {  Mentors }=require('../models/index');
const {Op} = require('sequelize');

class MentorRepository{
    
    async createMentor(data){
        try {
            const mentor=await Mentors.create(data);
            return mentor;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getMentor(mentorId){
        try {
            const mentor = await Mentors.findByPk(mentorId);
            return mentor;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllMentors(filter){
        try {
        if(filter.name){
            const mentors = await Mentors.findAll({
                where:{
                    name: {
                        [Op.startsWith]:filter.name
                    }
                }
        });
        return mentors;
        }
            const mentors = await Mentors.findAll();
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

}

module.exports =MentorRepository;