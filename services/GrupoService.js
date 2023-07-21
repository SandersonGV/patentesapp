
const ApiService = require("./ApiService")
require('dotenv').config()
const {POTENTES_API_URL} = process.env
const apiService = new ApiService(POTENTES_API_URL)
class GrupoService {
    getAll = async () => {
        const grupos = await apiService.get("/grupos")
        return [...grupos.content];
    }
    
    getOne = async (id) => {
        const grupo = await apiService.get(`/grupos/${id}`)
        return  {...grupo.content}
    }

    AddGrupo = async (grupo) => {
        grupo.id= grupos.length + 1
        grupos.push(grupo)
        return grupos;
    }

    removeGrupo = async (id) => {
        let idx = grupos.findIndex(o => o.id == id);
        grupos.splice(idx, 1);
        return grupos;
    }
}

module.exports = new GrupoService()