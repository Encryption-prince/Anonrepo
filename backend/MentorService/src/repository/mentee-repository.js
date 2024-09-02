const { Mentee } =require('../models/index');

class MenteeRepository{
    async createMentee(data){
        try{
            const mentee = await Mentee.create(data);
            return mentee;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteMentee(menteeId){
        try{
            await Mentee.destroy({
                where:{
                    id: menteeId
                }
            });
            return true;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async updateMentee(menteeId,data){
        try{
            //below approach also works but will not return updated object
            // const city = await City.update(data,{
            //     where:{
            //         id: cityId
            //     }
            // });
            // return city;
            //for getting updated data in mysql we use below approach
            const mentee = await Mentee.findByPk(menteeId);
            mentee.name=data.name;
            mentee.userId=data.userId;
            mentee.college=data.college;
            mentee.interest=data.interest;
            await mentee.save();
            return mentee;

        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async getMentee(menteeId){
        try{
            const mentee =await Mentee.findByPk(menteeId);
            return mentee;
        }catch(error){
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
    async getAllMentees(filter){
        try {
        if(filter.name){
            const mentees = await Mentee.findAll({
                where:{
                    name: {
                        [Op.startsWith]:filter.name
                    }
                }
        });
        return mentees;
        }
            const mentees = await Mentee.findAll();
            return mentees;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = MenteeRepository;