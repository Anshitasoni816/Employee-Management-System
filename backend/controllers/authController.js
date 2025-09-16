import User from '../model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
class authController {

  static login = async (req, res) => {

    try {

      const { email, password } = req.body;
      const user = await User.findOne({ email })

      if (!user) {

        return res.status(404).json({ success: false, error: "User not found" })

      }

      const isPassMatch = await bcrypt.compare(password, user.password)

      if (!isPassMatch) {

        return res.status(404).json({ success: false, error: "Wrong password" })

      }

      const token = jwt.sign(

        { _id: user._id, role: user.role },

        process.env.JWT_KEY,

        { expiresIn: "10d" }

      );

      res.status(200).json(


        {
          success: true,
          token,
          _id: user._id, name: user.name, role: user.role
        },

      );

    } catch (error) {

      console.log(error);


    }

  }

}

export default authController;