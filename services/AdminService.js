const ApiService = require("./ApiService")
require('dotenv').config()
const { POTENTES_API_URL } = process.env
const apiService = new ApiService(POTENTES_API_URL)

class AdminService {
    trylogin = async (item) => {
        try {
            const usuario = await apiService.post(`/users/trylogin`, item)
            return usuario.content
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AdminService()