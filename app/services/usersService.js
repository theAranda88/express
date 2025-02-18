const {User} = require('../../models')
class UsersService{
    static async obtenerU() {
        try { 
            return await User.findAll();
         }
          catch(e){
        
          }
      }

      static async crearU(name, email, password) {
        try {
            return await User.create({name, email, password});
         }
          catch(e){
              console.error("Usuario no creado");
              
          }
      }
  }

module.exports = UsersService;