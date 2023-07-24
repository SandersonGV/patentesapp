
const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)
class GrupoService {
    getAll = async () => {
        const items = await apiService.get("/grupos")
        return [...items.content];
    }
    
    getOne = async (id) => {
        const item = await apiService.get(`/grupos/${id}`)
        return  item.content
    }

    add = async (data) => {
        const newItem = await apiService.post(`/grupos`,data)
        return newItem.content;
    }

    edit = async (id, data) => {
        const newItem = await apiService.put(`/grupos/${id}`,data)
        return newItem.content.id;
    }

    remove = async (id) => {
        const newItem = await apiService.put(`/grupos/${id}`,{ativo:false})
        return newItem.content.id;
    }
}

module.exports = new GrupoService()