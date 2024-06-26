import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(`Error : ${err}`))
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})



app.listen(PORT, () => {
    console.log(`Server is running -> http://localhost:${PORT}`)
})
