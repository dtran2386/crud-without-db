const express = require('express')

const contacts = require('./routes/contacts')

const app = express()

app.use(express.json())

app.use('/api/contacts', contacts)

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})