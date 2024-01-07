
const UserDataManager = require('./userDataManager')
const db = require('../../models')

module.exports = new UserDataManager({
    model: db.user,
    db
})