const Reservation = require('../model/Reservation');
const Bus = require('../model/Bus');

const CreateReservation = async (req, res) => {
    try {
        const { bus, passenger, seat_number, reservation_date } = req.body;

        const existingBus = await Bus.findById(bus);

        if (existingBus) {
            return res.status(400).json({ message: "Bus not Found" });
        }

        const existingReservation = await findOne({ bus, seat_number });

        if (existingReservation) {
            return res.status(400).json({ message: 'Seat already reserved' });
        }

        const reservation = new Reservation({ bus, passenger, seat_number, reservation_date });

        await reservation.save();

        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}


const getReservationByPassenger = async (req, res) => {
    try {
        const {passenger} = req.params;
        const reservations = await Reservation.find({passenger}).populate('bus');
        res.status(200).json(reservations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getReservationDetails = async (req, res) => {
    try {
        const {reservation} =req.params;
        const getreservation = await Reservation.findById(reservation).populate('bus').populate('passenger');

        if(!getreservation){
            return res.status(404).json({message:"Reservation not found"});
        }

        res.status(200).json(getreservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateReservation = async (req, res) => {
    try {
        const {reservationId} = req.params;
        const updates = req.body;

        const updatedReservation = await Reservation.findByIdAndUpdate(reservationId, updates, {new:true});

        if(!updatedReservation){
            return res.status(404).json({message:"Reservation not found"});
        }

        res.status(200).json(updateReservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const cancelReservation = async (req, res) => {
    try {
        const { reservationId } = req.params;

        const deletedReservation = await Reservation.findByIdAndDelete(reservationId);

        if (!deletedReservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }

        res.status(200).json({ message: "Reservation canceled successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    CreateReservation, getReservationDetails, getReservationByPassenger,
    updateReservation,
    cancelReservation
};