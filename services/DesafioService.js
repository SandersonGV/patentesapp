const {desafios} = require("../repository/potentesdb")

class DesafioService {
    getAll = async (jogoId) => {
        let desafio = desafios.filter(o => o.jogoId == jogoId)
        return desafio ?? false;
    }
    
    getOne = async (id) => {
        let desafio = desafios.find(o => o.id == id)
        return desafio ?? false;
    }

    add = async (jogoId, data) => {
        data.id = desafios.length + 1
        data.jogoId = jogoId
        desafios.push(data)
        return {...data};
    }

    remove= async (jogoId, id) => {
        let result = false;
        let desafioidx = desafios.findIndex(o => o.id == id && o.jogoId == jogoId )
        if (desafioidx > 0) {
            desafios.splice(desafioidx, 1);
            result = true;
        }
        return result;
    }
}

module.exports = new DesafioService()