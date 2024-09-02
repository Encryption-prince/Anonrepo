const {MenteeService} = require('../services/index');

const menteeService= new MenteeService();

const create =async (req,res)=>{
    try {
        const mentee = await menteeService.createMentee(req.body);
        return res.status(201).json({
            data: mentee,
            success:true,
            message: 'succesfully created a mentee',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a mentee',
            err: error
        });
    }
}
const destroy = async (req,res)=>{
    try {
        const response = await menteeService.deleteMentee(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully deleted the mentee',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the mentee',
            err: error
        });
    }
}

const get =async (req,res)=>{
    try {
        const response = await menteeService.getMentee(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully fetched the mentee',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the mentee',
            err: error
        });
    }
}
//Patch -> /city/:id->req.body
const update =async (req,res)=>{
    try {
        const response = await menteeService.updateMentee(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully updated the mentee',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the mentee',
            err: error
        });
    }
}
const getAll =async (req,res)=>{
    try {
        const mentees = await menteeService.getAllMentees(req.query);
        return res.status(200).json({
            data: mentees,
            success:true,
            message: 'succesfully fetched the mentees',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the mentees',
            err: error
        });
    }
}
module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}