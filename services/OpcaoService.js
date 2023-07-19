const {opcoes} = require("../repository/potentesdb")

class OpcaoService {
    getAll = async (desafioId) => {
        let opcao = opcoes.filter(o => o.desafioId == desafioId)
        return opcao ?? false;
    }
    
    getOne = async (id) => {
        let opcao = opcoes.find(o => o.id == id)
        return opcao ?? false;
    }

    add = async (desafioId, data) => {
        data.id = opcoes.length + 1
        data.desafioId = desafioId
        opcoes.push(data)
        return {...data};
    }

    remove= async (desafioId, id) => {
        let result = false;
        let opcaoidx = opcoes.findIndex(o => o.id == id && o.desafioId == desafioId )
        if (opcaoidx > 0) {
            opcoes.splice(opcaoidx, 1);
            result = true;
        }
        return result;
    }
}

module.exports = new OpcaoService()