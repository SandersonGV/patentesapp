const { analiseDisc} = require("../repository/potentesdb")

class AnaliseService {
    getAll = async () => {
        return analiseDisc;
    }
}

module.exports = new AnaliseService()