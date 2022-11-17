const express = require('express');
const carRouter = require('./router/carsRouter.js');

const PORT = 8001 || process.env.PORT;
const app = express();

app.use(carRouter);

app.listen(PORT, () => {
    console.log(`Application running at localhost:${PORT}`);
});