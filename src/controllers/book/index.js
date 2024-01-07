
const bookRouter = require('express').Router()

const bookController = require('./bookController.js')

module.exports = function constructBookRoutes(app){

    bookRouter.get('/', bookController.browseAll)
    bookRouter.post('/',bookController.create)
    bookRouter.put('/:id',bookController.update)
    bookRouter.get('/:id',bookController.findByPk)

    app.use("/books",bookRouter);
    
}