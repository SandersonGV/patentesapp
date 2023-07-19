const { dinamicas} = require("../repository/potentesdb")

class DinamicaService {
    getAll = async () => {
        return dinamicas;
    }

    getOne = async (id) => {
       let dinamica =  dinamicas.find(o => o.id == id);
        return  {...dinamica}
    }

    Add = async (item) => {
        item.id= dinamicas.length + 1
        dinamicas.push(item)
        return dinamicas;
    }

    remove = async (id) => {
        let idx = dinamicas.findIndex(o => o.id == id);
        dinamicas.splice(idx, 1);
        return idx;
    }
}

module.exports = new DinamicaService()