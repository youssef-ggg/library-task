const { userDataManager } = require('../../dataManager')

const UserService = require('./userService.js')

module.exports = new UserService({
    dataManager: userDataManager
})