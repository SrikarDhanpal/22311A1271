const express = require('express');

const numbers = require('./routes/numbers');
if(process.env.NODE_ENV !== 'production') {
    // Load environment variables from .env file in development
    require('dotenv').config();
}



const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use("/number", numbers);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
