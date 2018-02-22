const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/users', (req, res, next) => {
  const users = db.users.findAll()
  res.json(users)
})

router.get('/users/:id', (req, res, next) => {
  const user = db.users.find(req.params.id)
  res.json(user)
})

router.delete('/users/:id', (req, res, next) => {
  const user = db.users.find(req.params.id)
  if (user) {
    db.users.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
