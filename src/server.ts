// "dev": "tsc -w & nodemon ."

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

const app = express()
dotenv.config()

const PORT: string | number = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(routes)

// connect mongo
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.is7bh.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error
  })
