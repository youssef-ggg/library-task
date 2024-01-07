const userController = require('./userController.js')

const userRouter = require('express').Router()

module.exports = function constructUserRoutes(app){

    userRouter.get('/', userController.browseAll)
    userRouter.post('/',userController.create)
    userRouter.put('/:id',userController.update)
    userRouter.get('/:id',userController.findByPk)

    app.use("/user", userRouter);
    
}