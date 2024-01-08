const { borrowedBookDataManager } = require('../../dataManager')

const BorrowedBookService = require('./borrowedBook.js')

module.exports = new BorrowedBookService({
    dataManager: borrowedBookDataManager,
})