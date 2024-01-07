const BaseDataManager = require('../base/baseDataManager')

class UserDataManager extends BaseDataManager {
    constructor({model, db}){
        super({model, db})
    }
}

module.exports = UserDataManager