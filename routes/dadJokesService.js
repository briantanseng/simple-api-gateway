let express = require('express');
let router = express.Router()
const axios = require('axios');
const BASE_URL = 'https://icanhazdadjoke.com/'

// without configuration
let path = "/jokes/dad"
router.get(path, (req, res, next) => {

    const options = {
        headers: {'Accept': 'application/json'}
    };

     axios.get(BASE_URL, options)
     .then((response) => {

       console.log(response.status);
       console.log(response.headers);
       console.log(response.data);

       res.send(response.data);
     })
     .catch((error) => {
       console.log(error);
     })
     .then(() => {
        console.log(`route: ${path} called`);
     });
})

module.exports = router