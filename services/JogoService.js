const {jogos} = require("../repository/potentesdb")

class JogosService {
    getAll = async (dinamicaId) => {
        let jogo = jogos.filter(o => o.dinamicaId == dinamicaId)
        return jogo ?? false;
    }
    
    getOneById = async (id) => {
        let jogo = jogos.find(o => o.id == id)
        return jogo ?? false;
    }

    add = async (dinamicaId, data) => {
        data.id = jogos.length + 1
        data.dinamicaId = dinamicaId
        jogos.push(data)
        return {...data};
    }

    remove= async (dinamicaId, id) => {
        let result = false;
        let jogoidx = jogos.findIndex(o => o.id == id && o.dinamicaId == dinamicaId )
        if (jogoidx > 0) {
            jogos.splice(jogoidx, 1);
            result = true;
        }
        return result;
    }
}

module.exports = new JogosService()