const express = require('express');
const app = express();
const config = require('./config/config');
const PORT = config.PORT;
const connectToDatabase = require('./config/db');
const contactRoutes = require('./router/router');

connectToDatabase();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: "Hello World" });
});

app.use('/api', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
