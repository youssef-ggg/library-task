const borrowedBookController = require('./borrowedBook.js')

const borrowedBookRouter = require('express').Router()

module.exports = function constructBorrowedBookRoutes(app){

    borrowedBookRouter.get('/', borrowedBookController.browseAll)
    borrowedBookRouter.post('/',borrowedBookController.create)
    borrowedBookRouter.put('/:id',borrowedBookController.update)
    borrowedBookRouter.get('/:id',borrowedBookController.findByPk)

    app.use("/borrow-book", borrowedBookRouter);
    
}