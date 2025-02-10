const Passenger = require('../model/Passenger');

const CreatePassenger = async(req,res)=>{
    try {
        const {name,email,phone,reservations} = req.body;

        const existingPasenger = await Passenger.findOne({email});

        if(existingPasenger){
            return res.status(400).json({message:'Email Already register'});
        }

        const passenger = new Passenger({name, email, phone,reservations});
        await passenger.save();

        res.status(201).json(passenger);

    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

module.exports = {CreatePassenger}