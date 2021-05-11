# simple-api-gateway

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

