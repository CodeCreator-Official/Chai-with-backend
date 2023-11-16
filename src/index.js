import dotenv from 'dotenv'
import app from './app.js'
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on('error', (err) => {
        console.log('Error at express', err)
    })

    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is runnning at http://localhost:${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log('MongoDB error: ' + error);
})

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}`)
//     } catch (error) {
//         console.log('ERROR: ', error)
//     }
// })()