
class BaseContoller {
    constructor({ service }){
        this.service = service;
        this.create = this.create.bind(this)
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

    update(){

    }

    findById(){

    }

    browse(){

    }

    delete(){

    }
}

module.exports = BaseContoller