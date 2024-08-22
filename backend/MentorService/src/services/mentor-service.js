const { MentorRepository }= require('../repository/index');

class MentorService{
    constructor(){
        this.mentorRepository= new MentorRepository();
    }
    async createMentor(data){
        try{
            const mentor= await this.mentorRepository.createMentor(data);
            return mentor;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }


    async getMentor(mentorId){
        try{
            const mentor= await this.mentorRepository.getMentor(mentorId);
            return mentor;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAllMentors(filter){
        try{
            const mentors = await this.mentorRepository.getAllMentors(filter);
            return mentors;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    
}
module.exports = MentorService;