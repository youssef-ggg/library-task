const { bookDataManager,borrowedBookDataManager,userDataManager } = require('../../dataManager')

const BorrowedBookService = require('./borrowedBook.js')

module.exports = new BorrowedBookService({
    dataManager: borrowedBookDataManager,
    bookDataManager,
    userDataManager
})