
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

    async update(id, body){
        try {
            const updated = await this.dataManager.update(id, body)
            //If successfully updated return the object
            if(updated[0] == 1){
                return await this.findByPk(id)
            }
        } catch (error) {
            console.log(error)
            throw new Error(error)            
        }
    }

    async findByPk(id){
        try{
            return this.dataManager.findByPk(id)
        }catch(error){
            console.log(error)
            throw new Error(error)   
        }
    }

    async browseAll(params){
        try{
            return this.dataManager.browseAll(params)
        }catch(error){
            console.log(error)
            throw new Error(error)   
        }
    }

}

module.exports = BaseService;