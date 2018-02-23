const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/comments', (req, res) => {
  const comments = db.comments.findAll()
  res.json(comments)
})

router.get('/comments/:id', (req, res) => {
  const comment = db.comments.find(req.params.id)
  res.json(comment)
})

router.post('/comments', (req, res) => {
  const newcomment = db.comments.insert({
    "author": req.body.author,
    "content": req.body.content,
    "post_id": req.body.post_id,
  })
  res.json(newcomment)
})

router.delete('/comments/:id', (req, res) => {
  const comment = db.comments.find(req.params.id)
  if (comment) {
    db.comments.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
