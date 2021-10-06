import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';

// Comprobando token
export const verifyToken = async (req, res, next) => {
   try {
      // Recibir token
      const token = req.headers["x-access-token"]

      console.log(token);

      // Comprobando la existencia del envío de token
      if(!token) return res.status(403).json({message: "No token provide"});

      // Si el token existe se extrae
      const tokenDecode = jwt.verify(token, config.SECRET);
      req.userId = tokenDecode.id;

      // Buscar el usuario con el token extraído
      const user = await User.findById(req.userId, {password: 0});
      console.log(user);
      if(!user) return res.status(404).json({message: "No user found"})

      next();
   } catch (error) {
      return res.status(401).json({message: "Unauthorized"});
   }
}

// Comprobar moderador
export const  isModerator = async (req, res, next) => {
   const user = await User.findById(req.userId);
   const roles = await Role.find({_id: {$in: user.roles}})
   
   for (let i = 0; i < roles.length; i++){
      if(roles[i].name === "moderator"){
         next();
         return;
      }
   }

   return res.status(403).json({ message: "Moderator Role is Required" });
}

// Comprobar admin
export const isAdmin = async (req, res, next) => {
   const user = await User.findById(req.userId);
   const roles = await Role.find({_id: {$in: user.roles}})
   
   for (let i = 0; i < roles.length; i++){
      if(roles[i].name === "admin"){
         next();
         return;
      }
   }

   return res.status(403).json({ message: "Admin Role is Required" });
}