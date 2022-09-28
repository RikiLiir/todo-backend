const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//crud api endpoints for users
app.get('/users', (req, res) => {
  res.send('get all users')
})
app.get('/users/:id', (req, res) => {
  res.send('get user by id')
})
app.post('/users', (req, res) => {
  res.send('create user')
})
app.put('/users/:id', (req, res) => {
  res.send('update user by id')
})
app.delete('/users/:id', (req, res) => {
  res.send('delete user by id')
})
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})