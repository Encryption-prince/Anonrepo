const { BookingRepository }= require('../repository/index');

class BookingService{
    constructor(){
        this.bookingRepository= new BookingRepository();
    }
    async createBooking(data){
        try{
            const booking= await this.bookingRepository.createBooking(data);
            return booking;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }


    async getBooking(bookingId){
        try{
            const booking= await this.bookingRepository.getBooking(bookingId);
            return booking;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }

    async getAllBooking(filter){
        try{
            const booking = await this.bookingRepository.getAllBooking(filter);
            return booking;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    async deleteBooking(bookingId){
        try{
            const response = this.bookingRepository.deleteBooking(bookingId);
            return response;
        }catch(error){
            console.log("something went wrong in service layer");
            throw {error};
        }
    }
    
}
module.exports = BookingService;