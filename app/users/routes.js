const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/users', (req, res) => {
  const users = db.users.findAll()
  res.json(users)
})

router.get('/users/:id', (req, res) => {
  const user = db.users.find(req.params.id)
  res.json(user)
})

router.post('/users', (req, res) => {
  const newUser = db.users.insert({
    "name": req.body.name,
    "phone": req.body.phone,
    "email": req.body.email,
    "company": req.body.company,
    "address": req.body.address,
    "photo_url": "http://placehold.it/100x100",
    "password": "hello"
  })
  res.json(newUser)
})

router.post('/login', (req, res) => {
  console.log('body', req.body)
  const user = db.users.findBy('email', req.body.email)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(400)
  }
})

router.delete('/users/:id', (req, res) => {
  const user = db.users.find(req.params.id)
  if (user) {
    db.users.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
