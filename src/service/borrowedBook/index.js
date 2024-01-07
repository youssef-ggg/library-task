const { borrowedBookDataManager } = require('../../dataManager')

const BorrowedBookService = require('./userService.js')

module.exports = new BorrowedBookService({
    dataManager: borrowedBookDataManager
})