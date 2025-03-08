const express = require('express')
const app = express()
const port = 3000
const mongodb = require('./data/database')

const contactRoute = require('./routes/contacts')

app.use('/contacts', contactRoute)

mongodb.initDb((err) => {
  if(err) {
    console.error(err)
  } else {
    console.log(`Database is running`)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})