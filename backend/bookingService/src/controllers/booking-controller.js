const {BookingService} = require('../services/index');

const bookingService= new BookingService();

const create =async (req,res)=>{
    try {
        const booking = await bookingService.createBooking(req.body);
        return res.status(201).json({
            data: booking,
            success:true,
            message: 'succesfully created a booking',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a booking',
            err: error
        });
    }
}

const get =async (req,res)=>{
    try {
        const response = await mentorService.getBooking(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully fetched the booking',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the booking',
            err: error
        });
    }
}


const getAll =async (req,res)=>{
    try {
        const bookings = await bookingService.getAllBooking(req.query);
        return res.status(200).json({
            data: bookings,
            success:true,
            message: 'succesfully fetched the bookings',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the bookings',
            err: error
        });
    }
}

const destroy = async (req,res)=>{
    try {
        const response = await bookingService.deleteBooking(req.params.id);
        return res.status(200).json({
            data: response,
            success:true,
            message: 'succesfully deleted the booking',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the booking',
            err: error
        });
    }
}
module.exports={
    create,
    destroy,
    get,
    //update,
    getAll,
    //createMany
}