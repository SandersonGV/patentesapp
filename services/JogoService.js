const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)

class JogosService {
    getAll = async (dinamicaId) => {
        const item = await apiService.get("/jogos",{dinamicaId:dinamicaId})
        return item.content ?? false;
    }
    
    getOne = async (id) => {
        const item = await apiService.get(`/jogos/${id}`)
        return item.content ?? false;
    }

    add = async (dinamicaId, data) => {
        data.dinamicaId = dinamicaId
        const newditem = await apiService.post(`/jogos`,data)
        return {...newditem.content};
    }

    edit = async (id, item) => {
        const newditem = await apiService.put(`/jogos/${id}`,item)
        return newditem.content;
    }

    remove= async (id) => {
        const newditem = await apiService.put(`/jogos/${id}`,{ativo:false})
        return newditem.content.id;
    }
}

module.exports = new JogosService()