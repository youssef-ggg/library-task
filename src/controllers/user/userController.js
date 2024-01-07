const {userService} =  require('../../service');
const BaseContoller = require('../base/baseController')

class UserController extends BaseContoller{
    constructor({ service }){
        super({ service })
    }
}

module.exports = new UserController({
    service: userService 
});