
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
            //TODO: handle error in some form of errorHandler
            console.log(error)
            if(error.status){
                return res.status(error.status).send(error.message)
            }else{
                return res.status(500).send(error.message)
            } 
        }
    }

    async update(req,res){
        try {
            const result =  await this.service.update(req.params.id, req.body)
            res.send(result)
        } catch (error) {
            console.log(error)
            if(error.status){
                return res.status(error.status).send(error.message)
            }else{
                return res.status(500).send(error.message)
            }
        }
    }

    async findByPk(req, res){
        try {
            const result =  await this.service.findByPk(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
            if(error.status){
                res.status(error.status).send(error.message)
            }else{
                res.status(500).send(error.message)
            } 
        }
    }

    async browseAll(req, res){
        try {
            const result =  await this.service.browseAll(req.query)
            res.send(result)
        } catch (error) {
            console.log(error)
            if(error.status){
                return res.status(error.status).send(error.message)
            }else{
                return res.status(500).send(error.message)
            }  
        }
    }

    delete(){

    }
}

module.exports = BaseContoller