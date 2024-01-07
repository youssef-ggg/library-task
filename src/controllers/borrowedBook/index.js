const borrowedBookController = require('./borrowedBook.js')

const borroedBookRouter = require('express').Router()

module.exports = function constructBorrowedBookRoutes(app){

    borroedBookRouter.get('/', borrowedBookController.browseAll)
    borroedBookRouter.post('/',borrowedBookController.create)
    borroedBookRouter.put('/:id',borrowedBookController.update)
    borroedBookRouter.get('/:id',borrowedBookController.findByPk)

    app.use("/borrow-book", userRouter);
    
}