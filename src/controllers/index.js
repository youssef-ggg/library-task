
const constructBookRoutes = require('./book')
const constructUserRoutes = require('./user')
const constructBorrowedBookRoutes = require('./borrowedBook')

// inject the app to the routes constructor from the main
module.exports = function constructRoutes(app){
    constructBookRoutes(app)
    constructUserRoutes(app)
    constructBorrowedBookRoutes(app)
}