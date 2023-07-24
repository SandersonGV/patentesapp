
const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)
class ParticipanteService {
    getAll = async (grupoId) => {
        const participante = await apiService.get("/participantes",{grupoId:grupoId})
        return participante?.content ?? false;
    }
    
    getOne = async (grupoId, email) => {
        const participante = await apiService.get("/participantes",{grupoId:grupoId,email:email})
        return participante?.content ?? false;
    }
    
    getOneById = async (participanteId) => {
        const participante = await apiService.get(`/participantes/${participanteId}`)
        return participante?.content ?? false;
    }

    add = async (grupoId, data) => {
        data.grupoId = grupoId
        const newditem = await apiService.post(`/participantes`,data)
        return newditem.content;
    }

    remove = async (id) => {
        const newditem = await apiService.put(`/participantes/${id}`,{ativo:false})
        return newditem.content.id;
    }
}

module.exports = new ParticipanteService()