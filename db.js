import mongoose from "mongoose";

const dbUrl = "mongodb://127.0.0.1/TodoApp"

const dbConnection = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log("Connection made")
    } catch (error) {
        console.log("Error While Trying To Make Connection", error)
    }
}
    


export default dbConnection;