
const BorrowedBookDataManager = require('./borrowedBook.js')
const db = require('../../models')

module.exports = new BorrowedBookDataManager({
    model: db.borrowedBook,
    db
})