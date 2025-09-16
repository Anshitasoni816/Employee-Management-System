import connectToDatabase from './Database/db_connection.js'
import User from './model/User.js'
import bcrypt from 'bcrypt'

const userRegister = async () => {

    try {

        await connectToDatabase()
        const hashpassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashpassword,
            role: "admin"
        })

        await newUser.save()
        console.log("Admin created successfully");

    } catch (error) {
        console.log(error);

    }

}

userRegister();
