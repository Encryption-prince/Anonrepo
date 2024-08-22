const {MentorService} = require('../services/index');

const mentorService= new MentorService();

const create =async (req,res)=>{
    try {
        const mentor = await mentorService.createMentor(req.body);
        return res.status(201).json({
            data: mentor,
            success:true,
            message: 'succesfully created a mentor',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a mentor',
            err: error
        });
    }
}

const get =async (req,res)=>{
    try {
        const response = await mentorService.getMentor(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully fetched the mentor',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the mentor',
            err: error
        });
    }
}


const getAll =async (req,res)=>{
    try {
        const mentors = await mentorService.getAllMentors(req.query);
        return res.status(200).json({
            data: mentors,
            success:true,
            message: 'succesfully fetched the mentors',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the mentors',
            err: error
        });
    }
}


module.exports={
    create,
    //destroy,
    get,
    //update,
    getAll,
    //createMany
}