const Bus = require('../model/Bus');

const CreateBus = async (req, res) => {
    try {
        const { bus_number, capacity, operator, route } = req.body;

        const existingBus = await Bus.findOne({ bus_number });
        if (existingBus) {
            return res.status(400).json({ message: "Bus number must be unique" });
        }

        const bus = new Bus({ bus_number, capacity, operator, route });
        await bus.save();
        res.status(201).json(bus);

    } catch (error) {
        res.Status(400).json({ error: error.message });
    }
}

const getBusesByOperatror =async (req,res)=>{
    try {
        const {operator} = req.params;
        const buses = await Bus.find({operator:operator});
        res.status(200).json(buses);
    } catch (error) {
        error.status(400).json({error: error.message})
    }
}


const getBusesByRoute =async (req,res) =>{
    try {
        const {route} = req.params;
        const buses = await Bus.find({route:route});
        res.status(200).json(buses);
    } catch (error) {
        error.status(400).json({error: error.message})
    }
}

const updateBus =async (req,res)=>{
    try {
        const {bus} =req.params;
        const updates = req.body;
        const updatedBus = await Bus.findByIdAndUpdate(bus, updates, {new:true});

        if(!updatedBus){
            return res.status(404).json({message:"Bus not found"});
        }

        res.status(200).json(updatedBus);
    } catch (error) {
        error.status(400).json({error: error.message})
    }
}

const deleteBusFromOperator =async (req,res)=>{
    try {
        const {bus} = req.body;
        const deletedBus = await Bus.findByIdAndDelete(bus);
        if(!deletedBus){
            return res.status(400).json({message:"Bus not found"});
        }

        res.status(200).json({message:"Bus Deleted successfully"});
    } catch (error) {
        error.status(400).json({error: error.message})
    }
}

module.exports = { CreateBus, getBusesByOperatror , getBusesByRoute, updateBus, deleteBusFromOperator};