const BaseService = require('../base/baseService.js')

class BorrowedBookService extends BaseService {
    constructor({ dataManager }) {
        super({dataManager})
    }

    // ovrides the create from the BaseService
    async create(body){
        const {
            dueDate,
            ...rest
            
        } = body

        if(!dueDate){
            const CURRENT_TIMESTAMP = Date.now()
            
        }
    }
}

module.exports = BorrowedBookService