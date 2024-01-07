
class BaseContoller {
    constructor({ service }){
        this.service = service;
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.findByPk = this.findByPk.bind(this)
        this.browseAll = this.browseAll.bind(this)
    }

    async create(req, res){
        try {
            const result =  await this.service.create(req.body)
            res.send(result)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)   
        }
    }

    async update(req,res){
        try {
            const result =  await this.service.update(req.params.id, req.body)
            res.send(result)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)   
        }
    }

    async findByPk(req, res){
        try {
            const result =  await this.service.findByPk(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)   
        }
    }

    async browseAll(req, res){
        try {
            const result =  await this.service.browseAll(req.query)
            res.send(result)
        } catch (error) {
            // TODO ERROR httpRespond and handling to a new modules in the src/utils
            console.log(error)
            if(error.status){
                res.status(error.status).send(error.message)
            }else{
                res.status(500).send(error.message)   
        
            }
        }
    }

    delete(){

    }
}

module.exports = BaseContoller