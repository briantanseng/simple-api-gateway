const yaml = require('js-yaml');
const fs   = require('fs');

let config = {};
try {
    config = yaml.load(fs.readFileSync('./config/config.yml', 'utf8'));
    console.info("Configuration loaded");
} catch (e) {
    console.warn(e);
}

function getServices() {
    return config.services;
}

function getAllServices() {
    let result = [];
    let services = getServices();
    for(let i = 0; i < services.length; i++) {
        result = result.concat(services[i].routes);
    }
    return result;
}

function getRoutesByServiceKey(serviceKey) {
    let result = [];
    let services = getServices().filter(s => s.serviceKey == serviceKey )
    for(let i = 0; i < services.length; i++) {
        result = result.concat(services[i].routes);
    }
    return result;
}

function getDefaultSettings() {
    return config.default;
}

function isAuthEnabled() {
    return config.auth.enabled;
}

console.debug("All services:")
console.debug(getAllServices())
console.debug("Default:")
console.debug(getDefaultSettings())

console.debug(isAuthEnabled())

module.exports = { getAllServices, getRoutesByServiceKey, getDefaultSettings, isAuthEnabled }