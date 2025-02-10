const Operator = require('../model/Operator');

const CreateOperator = async (req, res) => {

    try {

        const { name, conact_info, buses } = req.body;

        const existingOperator = await Operator.findOne({ name });

        if (existingOperator) {
            return res.status(400).json({ message: "Operator Already Exists" })
        }

        const operator = new Operator({ name, conact_info, buses });
        await operator.save();
        res.status(201).json(operator);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const updateOperator = async (req, res) => {
    try {
        const {operator} = req.params;
        const updates = req.body;

        const updatedOperator = await Operator.findByIdAndUpdate(operator, updates, {new:true});

        if(!updatedOperator){
            return res.status(404).json({message: "Operator not found"});
        }

        res.status(200).json(updatedOperator);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteOperator = async (req, res) => {
    try {
        const {operator} = req.params;

        const deletedOperator = await Operator.findByIdAndDelete(operator);

        if(!deletedOperator){
            return res.status(404).json({message:"Operator not found"});
        }

        res.status(200).json({message:"Operator deleted successfully"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { CreateOperator, updateOperator, deleteOperator };