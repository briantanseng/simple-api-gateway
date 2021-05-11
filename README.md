# simple-api-gateway

This is a proof of concept for a Node-based API Gateway based on Express.JS

![API-Gateway](https://user-images.githubusercontent.com/4847948/117788007-91182e00-b279-11eb-83c7-d545b14e3e0a.jpg)

Routes and targets are configured using a YAML file like this
```
auth:
  enabled: true
services:
  - serviceKey: "dadJokesService"
    serviceDescription: "An API for dad jokes"
    routes:
      - path: "/dad"
        method: "GET"
        target: "https://icanhazdadjoke.com/"
        enabled: true
  - serviceKey: "chuckNorrisJokesService"
    serviceDescription: "An API for Chuck Norris jokes"
    routes:
      - path: "/chuck" 
        method: "GET"
        target: "https://api.chucknorris.io/jokes/random"
        enabled: true        
```

Ideas:
* Support other HTTP methods :)
* Session Management
* Cross-Site Request Forgery (CSRF) protection
* Cross-Origin Resource Sharing (CORS)
* Rate Limiting
* Logging

## Firebase Setup for Local Development

### Finding credentials automatically

Read:
https://cloud.google.com/docs/authentication/production#automatically

When running this code on a local machine, you must set the environment variable GOOGLE_APPLICATION_CREDENTIALS.

### Creating a service account
Follow instructions here:
https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account

### Setup the GOOGLE_APPLICATION_CREDENTIALS environment variable

Follow instructions here:
https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable
```
export GOOGLE_APPLICATION_CREDENTIALS=[KEY_PATH]

Example:
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

