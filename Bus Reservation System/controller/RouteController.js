const Route = require('../model/Route');

const CreateRoute = async (req, res) => {
    try {
        const { start_location, end_location, distance, buses } = req.body;

        if (distance <= 0) {
            return res.status(400).json({ message: 'Distance must be a positive number' });
        }

        const route = new Route({ start_location, end_location, distance, buses });

        route.save();
        res.status(201).json(route);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateRoute = async (req, res) => {
    try {
        const { routeId } = req.params;
        const updates = req.body;

        const updateRoutes = await Route.findByIdAndUpdate(routeId, updates, { new: true });

        if (!updateRoutes) {
            return res.status(404).json({ message: 'Route not found' });
        }

        res.status(200).json(updateRoutes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteRoute = async (req, res) => {
    try {
        const { routeId } = req.params;

        const deletedRoutes = await Route.findByIdAndUpdate(routeId, updates, { new: true });

        if (!deletedRoutes) {
            return res.status(404).json({ message: 'Route not found' });
        }

        res.status(200).json({ message: "Route deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { CreateRoute, updateRoute, deleteRoute };