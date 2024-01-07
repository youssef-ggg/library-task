
const BookDataManager = require('./bookDataManager')
const db = require('../../models')

module.exports = new BookDataManager({
    model: db.book,
    db
})