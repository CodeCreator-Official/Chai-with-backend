import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}`)
//     } catch (error) {
//         console.log('ERROR: ', error)
//     }
// })()