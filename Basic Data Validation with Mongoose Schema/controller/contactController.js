const Contact = require('../model/Contact');

const createContact = async (req, res) => {
    try {
        const { name, email, phone, age } = req.body;

        const newContact = new Contact({
            name,
            email,
            phone,
            age
        });

        await newContact.save();

        res.status(201).json({ message: 'Contact created successfully', contact: newContact });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createContact };
