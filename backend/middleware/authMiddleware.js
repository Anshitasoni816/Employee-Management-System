import jwt from 'jsonwebtoken'
import User from '../model/User.js'


const verifyUser = async(req, res, next) => {

    try {
        
      const token = req.headers.authorization.split(' ')[1];

      if(!token) {

        return res.status(404).json({success:false, error: "Token not Provided"})

      }

      const decodeToken = jwt.verify(token, process.env.JWT_KEY)
      
      if(!decodeToken) {

        return res.status(404).json({success:false, error: "Token Not Valid"})

      }

      const user = await User.findById({_id: decodeToken._id}).select('-password')

      if(!user) {

        return res.status(404).json({success:false, error: "user not found"})

      }

      req.user = user 
      next()

    } catch (error) {
        
        return res.status(500).json({success:false, error: "server side error"})

    }

}

export default verifyUser