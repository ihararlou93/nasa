const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

require('dotenv').config();

app.use('/', require('./routes/index'));

app.listen(PORT, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + PORT);
    }
});