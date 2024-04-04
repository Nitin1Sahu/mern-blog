import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.route.js'

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(`Error : ${err}`))
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/user', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running -> http://localhost:${PORT}`)
})
