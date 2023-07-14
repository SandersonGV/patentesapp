const {respostas } = require("../repository/potentesdb")

class RespostaService {
    getOne = async (participanteid) => {
        let resposta = respostas.find(o => o.participanteid == participanteid);
        return resposta||false;
    }

    addResposta = async (participanteid, respostaslist) => {
        let result = false
        let resposta = respostas.find(o => o.participanteid == participanteid);

        if (resposta) {
            resposta.respostas = respostaslist;
            result = true;
        }else{
            resposta = {participanteid:participanteid,respostas:respostaslist}
            respostas.push(resposta)
            result = true;
        }
        return result;
    }
    
    addRespostaGrupo = async (participantes) => {
        for (const part of participantes) {
            this.addResposta(part.id,part.respostas)
        }
        return true;
    }

}

module.exports = new RespostaService()