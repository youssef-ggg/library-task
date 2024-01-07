

class BorrowerController {
    constructor(){
        // this.getBorrowers.bind(this.getBorrowers)
    }
    async getBorrowers(req, res){
        return res.send({
            borrower:"BORROWER"
        })
    }
}

module.exports = new BorrowerController();