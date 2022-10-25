const express = require('express');

const api = express();

//using express middleware and static method
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
    console.log('API is up and running');
});


