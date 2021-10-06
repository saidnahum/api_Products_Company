import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

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