import User from '../models/User';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
   const { username, email, password, roles } = req.body;

   const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password)
   });

   const savedUser = await newUser.save();

   // Token

   await newUser.save()
   res.json("register")
}

export const login = async (req, res) => {
   res.json("login")
}