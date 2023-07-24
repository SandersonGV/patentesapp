
const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)

class RespostaService {
    getAll = async (participanteid) => {
        const respostas = await apiService.get("/respostas",{participanteid:participanteid})
        return respostas.content ?? false;
    }

    addRespostaGrupo = async (participantes) => {
        let data = []
        for(let p of participantes){
            p.resposta.map(o=>{
                o.participanteId = p.id
                data.push(o)
            });
        }
        const newditem = await apiService.post(`/respostas`,data)
        return newditem.content ?? false;
    }

}

module.exports = new RespostaService()