const BaseService = require('../base/baseService.js')

class BorrowedBookService extends BaseService {
    constructor({ dataManager }) {
        super({dataManager})
        
    }

    // ovrides the create from the BaseService
    async create(body){
        const {
            dueDate
        } = body


        // TODO Handle timestamps and or string duedate as input
        if(!dueDate){
            const dueDate = new Date()
            dueDate.setMonth(dueDate.getMonth() + 1)
            body.dueDate = dueDate
        }

        try {
            return this.dataManager.create(body)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    }
}

module.exports = BorrowedBookService