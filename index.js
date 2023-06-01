const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const port = 3002
const prisma = new PrismaClient()

app.use(express.json()) // parses incoming requests with JSON payloads

// Create User
app.post('/', async (req, res) => {
  const newUser = await prisma.user.create({
    data: req.body // passed in the req json body
  })
  res.json(newUser)
})

// Read User
app.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany()
  res.json(allUsers)
})

// Update User
app.put('/:id', async (req, res) => {
  const id = req.params.id // passed in the url
  const newAge = req.body.age // passed in the req json body
  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(id) // passed as string in url
    },
    data: {
      age: newAge
    }
  })
  res.json(updatedUser)
})

// Delete User
app.delete('/:id', async (req, res) => {
  const id = req.params.id // passed in the url
  const deletedUser = await prisma.user.delete({
    where: {
      id: parseInt(id)
    }
  })
  res.json(deletedUser)
})

// Create House
app.post('/house', async (req, res) => {
  const newHouse = await prisma.house.create({
    data: req.body
  })
  res.json(newHouse)
})

// Read House
app.get('/house', async (req, res) => {
  const allHouses = await prisma.house.findMany()
  res.json(allHouses)
})

app.listen(port, () => console.log(`Express server listening on ${port}`))