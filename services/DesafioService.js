const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)

class DesafioService {
    getAll = async (jogoId) => {
        const desafios = await apiService.get("/desafios",{jogoId:jogoId})
        return desafios?.content ?? false;
    }
    
    getOne = async (id) => {
        const desafio = await apiService.get(`/desafios/${id}`)
        return desafio?.content ?? false;
    }

    add = async (data) => {
        const newItem = await apiService.post(`/desafios`,data)
        return newItem.content;
    }

    edit = async (id, data) => {
        const newItem = await apiService.put(`/desafios/${id}`,data)
        return newItem.content.id;
    }
    remove= async (id) => {
        const newItem = await apiService.put(`/desafios/${id}`,{ativo:false})
        return newItem.content.id;
    }
}

module.exports = new DesafioService()