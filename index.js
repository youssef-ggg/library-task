const constructRoutes = require('./src/controllers')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = 3000
// use bodyParser is no longer bundled as part of express and 
// is need to parse body in post/put requests
app.use(bodyParser.json())
// makes the routes for all the APIS
constructRoutes(app);

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})