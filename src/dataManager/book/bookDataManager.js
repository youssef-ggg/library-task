const BaseDataManager = require('../base/baseDataManager')

class BookDataManager extends BaseDataManager {
    constructor({model, db}){
        super({model, db})
    }
}

module.exports = BookDataManager