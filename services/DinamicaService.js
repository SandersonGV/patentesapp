const { dinamicas} = require("../repository/potentesdb")

class DinamicaService {
    getAll = async () => {
        return dinamicas;
    }
}

module.exports = new DinamicaService()