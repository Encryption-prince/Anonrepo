const { MenteeRepository }= require('../repository/index');

class MenteeService{
    constructor(){
        this.menteeRepository= new MenteeRepository();
    }
    async createMentee(data){
        try{
            const mentee= await this.menteeRepository.createMentee(data);
            return mentee;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async deleteMentee(menteeId){
        try{
            const response = this.menteeRepository.deleteMentee(menteeId);
            return response;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async updateMentee(menteeId,data){
        try{
            const mentee= await this.menteeRepository.updateMentee(menteeId,data);
            return mentee;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getMentee(menteeId){
        try{
            const mentee= await this.menteeRepository.getMentee(menteeId);
            return mentee;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async getAllMentees(filter){
        try{
            const mentees = await this.menteeRepository.getAllMentees(filter);
            return mentees;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
}
module.exports = MenteeService;