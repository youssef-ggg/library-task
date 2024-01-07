
const bookRouter = require('express').Router()

const BookController = require('./bookController.js')

module.exports = function constructBookRoutes(app){

    bookRouter.get('/', BookController.getBooks)
    bookRouter.post('/',BookController.create)
    app.use("/books",bookRouter);
    
}