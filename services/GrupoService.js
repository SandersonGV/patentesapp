const {grupos } = require("../repository/potentesdb")

class GrupoService {
    getAll = async () => {
        return [...grupos];
    }
    
    getOne = async (id) => {
       let grupo =  grupos.find(o => o.id == id);
        return  {...grupo}
    }

    AddGrupo = async (grupo) => {
        grupo.id= grupos.length + 1
        grupos.push(grupo)
        return grupos;
    }

    removeGrupo = async (id) => {
        let idx = grupos.findIndex(o => o.id == id);
        grupos.splice(idx, 1);
        return grupos;
    }
}

module.exports = new GrupoService()