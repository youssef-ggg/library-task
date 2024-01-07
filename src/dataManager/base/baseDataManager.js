const {Op} = require('sequelize')

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

    update(id, body){
        try {
            // update in sequelize auto updated the updated at value to current timestamp
            return this.model.update(body,{
                where:{
                    id
                }
            })
        } catch (error) {
            console.log(error)
            throw new Error(error)        
        }

    }

    findByPk(id){
        try {
            return this.model.findByPk(id)
        } catch (error) {
            console.log(error)
            throw new Error(error)   
        }
    }

    async browseAll(params){
        let {
            order, page, size, ...filters
        } = params
        
        let options = {}
        let where = {}
        // order is passed in the query like this "URI?order='attribute',DESC"
        // or you can just pass the attribute like this "URI?order='attribute'"
        // and it will defualt to ASCENDING 
        //TODO: change order to order by single or multiple attributes
        if(order){
            if(order.includes(',')){
                order = [order.split(',')]
                order.forEach(oi =>{
                    if(!['ASC', 'DESC'].includes(oi[1])){
                        let error = new Error(`You cannot have ${order[1]} as a direction to order you can only use ASC OR DESC values`)
                        error.status = 400
                        throw error
                    }
                })
            }
            else {
                order = [[order, 'ASC']]
            }
            options.order = order
        }
        if(page){
            options.offset = parseInt(page)
        }
        if(size){
            options.limit = parseInt(size)
        }
        // this checkes if te value of an attribute is like or equals in the query
        for (const [key, value] of Object.entries(filters)) {
            if(value.includes('%')){
                where[key] = {
                    [Op.like] : value
                }
            }else {
                where[key] = value
            }
        }
        options.where = where
        console.log(options)
        try {
            return this.model.findAll(options)
        } catch (error) {
            console.log(error)
            throw new Error(error)   
        }   
    }

}

module.exports = BaseDataManager