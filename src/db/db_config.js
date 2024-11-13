import mongoose from "mongoose"

// Create connection to the database based on the URI provided in the .env file
export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("Connection successfull")
        })

        connection.on("error", err => {
            console.log("Connection error: " + err)
            process.exit()
        })
    } catch (error) {
        console.log("Database connection failed! Check env. file!")
        console.log(error)
    }
}
