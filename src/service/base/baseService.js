
class BaseService {
    constructor({ dataManager }){
        this.dataManager = dataManager
        }

    async create(body){

        try {
        return this.dataManager.create(body)
        } catch (error) {
            console.log(error)
            throw new Error(error)            
        }
    }

}

module.exports = BaseService;