const express = require('express');
const config = require('./config/config');
const connectToDatabase = require('./config/db');
const productRoutes = require('./router/productRoutes');

const app = express();
const PORT = config.PORT;

connectToDatabase();
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: "E-commerce API is running" });
});

app.use('/api', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
