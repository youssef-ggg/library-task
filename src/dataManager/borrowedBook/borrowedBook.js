const BaseDataManager = require('../base/baseDataManager')

class BorrowedBookDataManager extends BaseDataManager {
    constructor({model, db}){
        super({model, db})
    }
}

module.exports = BorrowedBookDataManager