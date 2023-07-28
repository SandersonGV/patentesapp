
const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)
class ClienteService {
    getAll = async () => {
        const items = await apiService.get("/clientes")
        return [...items.content];
    }
    
    getOne = async (id) => {
        const item = await apiService.get(`/clientes/${id}`)
        return  item.content
    }

    add = async (data) => {
        const newItem = await apiService.post(`/clientes`,data)
        return newItem.content;
    }

    edit = async (id, data) => {
        const newItem = await apiService.put(`/clientes/${id}`,data)
        return newItem.content.id;
    }

    remove = async (id) => {
        const newItem = await apiService.put(`/clientes/${id}`,{ativo:false})
        return newItem.content.id;
    }
}

module.exports = new ClienteService()