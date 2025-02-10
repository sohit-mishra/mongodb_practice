const express = require('express');
const app = express();
const config = require('./config/config');
const PORT = config.PORT;
const connectToDatabase = require('./config/db');

const BusRoutes = require('./router/BusRoute');
const OperatorRoutes = require('./router/OperatorRoute');
const PassengerRoutes = require('./router/PassengerRoute');
const ReservationRoutes = require('./router/ReservationRoute');
const RouteRoutes = require('./router/RouteRoutes');

connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: "Hello World" });
});

app.use('/api/buses', BusRoutes);
app.use('/api/operators', OperatorRoutes);
app.use('/api/passengers', PassengerRoutes);
app.use('/api/reservations', ReservationRoutes);
app.use('/api/routes', RouteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
