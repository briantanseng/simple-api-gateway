let { getAllServices } = require('../config/config');
let express = require('express');
let mountedRoutes = express.Router()
const axios = require('axios');

function mountGetRoutes(path, target) {
    mountedRoutes.get(path, (req, res, next) => {

        const options = {
            headers: {'Accept': 'application/json'}
        };
    
         axios.get(target, options)
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
            console.log(`route: ${req.url} called`);
         });
    })
}

function mountRoutes() {

    let svc = getAllServices();

    for(let i = 0; i < svc.length; i++) {

        let path = svc[i].path;
        let method = svc[i].method;
        let target = svc[i].target;
        let enabled = svc[i].enabled;

        if(!enabled) continue;

        if("GET" == method) {
            mountGetRoutes(path, target);
        }
        

    }

}

mountRoutes();

module.exports = mountedRoutes