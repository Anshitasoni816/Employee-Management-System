import mongoose from 'mongoose'

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected");

    } catch (error) {
        console.log("MongoDB Connection Error:", error)

    }
}

export default connectToDatabase
