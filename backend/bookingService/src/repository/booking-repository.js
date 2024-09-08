const { Booking }=require('../models/index');
const {Op} = require('sequelize');

class BookingRepository{
    #createFilter(data){
        let filter={};
        if(data.menteeId){
            filter.menteeId = data.menteeId;
        }
        if(data.mentorId){
            filter.mentorId = data.mentorId;
        }
        return filter;
    }
    async createBooking(data){
        try {
            const booking=await Booking.create(data);
            return booking;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getBooking(bookingId){
        try {
            const booking = await Booking.findByPk(bookingId);
            return booking;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllBooking(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const booking = await Booking.findAll({
                where: filterObject
            });
            return booking;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
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

async deleteBooking(bookingId){
    try{
        await Booking.destroy({
            where:{
                id: BookingId
            }
        });
        return true;
    }catch(error){
        console.log("something went wrong in repository layer");
        throw {error};
    }
}
}

module.exports =BookingRepository;