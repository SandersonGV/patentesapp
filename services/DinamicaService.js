const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)

class DinamicaService {
    getAll = async () => {
        const item = await apiService.get("/dinamicas")
        return item.content;
    }

    getOne = async (id) => {
        const item = await apiService.get(`/dinamicas/${id}`)
        return  item.content
    }

    add = async (item) => {
        const newditem = await apiService.post(`/dinamicas`,item)
        return newditem.content;
    }

    edit = async (id, item) => {
        const newditem = await apiService.put(`/dinamicas/${id}`,item)
        return newditem.content;
    }

    remove = async (id) => {
        const newditem = await apiService.put(`/dinamicas/${id}`,{ativo:false})
        return newditem.content.id;
    }
}

module.exports = new DinamicaService()