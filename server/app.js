const cors = require('cors')
const express = require('express')
if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/')
const errorHandler = require('./middlewares/errorHandler')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errorHandler)




app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})