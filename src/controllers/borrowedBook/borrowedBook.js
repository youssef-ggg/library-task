const {borrowedBook} =  require('../../service');
const BaseContoller = require('../base/baseController')

class BorrowedBookController extends BaseContoller{
    constructor({ service }){
        super({ service })
    }
}

module.exports = new BorrowedBookController({
    service: borrowedBook 
});