

class BaseDataManager {
    constructor({model, db}){
        this.model = model
        this.db = db
    }

    create(body){
        try {
            return this.model.create(body)
        } catch (error) {
            console.log(error)
            throw new Error(error)        
        }
    }

    async update(){

    }

    async findById(id){

    }

    async browse(){

    }
}

module.exports = BaseDataManager