
const constructBookRoutes = require('./book')
const constructBorrowerRoutes = require('./borrower');

// inject the app to the routes constructor from the main
module.exports = function constructRoutes(app){
    constructBookRoutes(app);
    constructBorrowerRoutes(app);    
}