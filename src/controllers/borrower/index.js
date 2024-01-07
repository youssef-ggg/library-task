
const borrowerRouter = require('express').Router()

const BorrowerController = require('./borrowerController.js')

module.exports = function constructBorrowerRoutes(app){

    borrowerRouter.get('/', BorrowerController.getBorrowers)

    app.use("/borrower", borrowerRouter);
    
}