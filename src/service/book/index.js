const { bookDataManager } = require('../../dataManager')

const BookService = require('./bookService.js')

module.exports = new BookService({
    dataManager: bookDataManager
})