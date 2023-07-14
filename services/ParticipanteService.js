const {participantes} = require("../repository/potentesdb")

class ParticipanteService {
    getAll = async (grupoId) => {
        let participante = participantes.filter(o => o.grupoId == grupoId)
        return participante ?? false;
    }
    
    getOne = async (grupoId, email) => {
        let participante = participantes.find(o => o.grupoId == grupoId && o.email == email)
        return participante ?? false;
    }
    
    getOneById = async (participanteId) => {
        let participante = participantes.find(o => o.id == participanteId)
        return participante ?? false;
    }

    addParticipante = async (grupoId, data) => {
        data.id = participantes.length + 1
        data.grupoId = grupoId
        participantes.push(data)
        return {...data};
    }

    removeParticipante = async (grupoId, participanteId) => {
        let result = false;
        let participanteidx = participantes.findIndex(o => o.id == participanteId && o.grupoId == grupoId )
        if (participanteidx > 0) {
            participantes.splice(participanteidx, 1);
            result = true;
        }
        return result;
    }
}

module.exports = new ParticipanteService()