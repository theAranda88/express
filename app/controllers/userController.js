const UsersService = require("../services/usersService");

 class UserController{
    static async obtenerUsuarios(req, res) {
        try {
            const users = await UsersService.obtenerU();
            res.json(users);
        } catch (e) {
            res.json({error: "error en la peticion"})

    }
    }
    static async login(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
       static async register(req, res) {
        try {
            let user = await UsersService.crearU(res.body);
            res.json(user);
        } catch (e) {
            res.json({error: "error en la peticion"})
    }
    }
       static async eliminarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
         static async actualizarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
}
module.exports = UserController;