const BaseContoller = require('../base/baseController.js')
const {bookService} = require('../../service')

class BookController extends BaseContoller{

    constructor({service}){
        super({service})
        // this.getBooks.bind(this.getBorrowers)
    }
    async getBooks(req, res){
        return res.send({
            book:"BORROWER BOOKS"
        })
    }
}

module.exports = new BookController({ 
    service: bookService 
});