const { getAllServices } = require('./config/config');
const express = require('express');
const { router } = require('./routes/router')

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(router)

const PORT = process.env.PORT || 8080;
console.log(`Simple API Gateway run on ${PORT}`)

let routes = getAllServices();
routes.forEach(r => console.log(`http://localhost:${PORT}${r.path}`) )

app.listen(PORT);
