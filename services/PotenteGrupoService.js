const {grupos, participantes, respostas, dinamicas} = require("../repository/potentesdb")

class PotenteGrupoService {
    
    getDinamicas = async () => {
        return dinamicas;
    }
    getAll = async () => {
        return grupos;
    }
    getOne = async (id) => {
        return grupos.find(o => o.id == id); 
    }

    //#region participantes
    getParticipante = async (grupoId, email) => {
        let participante = grupo.participantes.find(o => o.grupoId == grupoId && o.email == email)
        return participante ?? false;
    }

    addParticipante = async (id, data) => {
        let idx = grupos.findIndex(o => o.id == id)
        data.id = grupos[idx].participantes.length + 1
        data.respostas = []
        grupos[idx].participantes.push(data)
        return grupos[idx];
    }

    removeParticipante = async (grupoId, participanteId) => {
        let result = false;
        let grupo = grupos.find(o => o.id == grupoId);
        if (grupo) {
            let participanteidx = grupo.participantes.findIndex(o => o.id == participanteId)
            grupo.participantes.splice(participanteidx, 1);
            result = true;
        }
        return result;
    }

    // end region
    addResposta = async (grupoId, email, respostas) => {
        let grupo = grupos.find(o => o.id == grupoId);
        if (grupo) {
            let participanteidx = grupo.participantes.findIndex(o => o.email == email)
            grupo.participantes[participanteidx].respostas = respostas;
            return participanteidx;
        }
        return false;
    }
    
    addRespostaGrupo = async (grupoId, participantes) => {
        let grupo = grupos.find(o => o.id == grupoId);
        if (grupo) {
            grupo.participantes = participantes;
            return true;
        }
        return false;
    }
    AddGrupo = async (grupo) => {
        grupo.id= grupos.length + 1
        grupo.participantes= []
        grupos.push(grupo)
        return grupos;
    }
 
    removeGrupo = async (id) => {
        let idx = grupos.findIndex(o => o.id == id)
        grupos.splice(idx, 1)
        return grupos;
    }

}

module.exports = new PotenteGrupoService()