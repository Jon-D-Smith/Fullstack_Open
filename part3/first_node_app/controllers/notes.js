const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({})
        res.json(notes)
    
})

notesRouter.get('/:id', async (req, res, next) => {
   const note = await Note.findById(req.params.id)
        
            if(note) {
                res.json(note)
            } else {
                res.status(404).end()
            }
        
})

notesRouter.post('/', async (req, res, next) => {
    const body = req.body

    const note = await new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    await note.save()
        
    res.json(note)
        
})

notesRouter.delete('/:id', async (req, res, next) => {
   await Note.findByIdAndRemove(req.params.id)
        res.status(204).end()
        
})

notesRouter.put('/:id', (req, res, next) => {
    const body = req.body

    const note = {
        content: body.content,
        important: body.important
    }

    Note.findByIdAndUpdate(req.params.id, note, { new: true })
        .then(updateNote => {
            res.json(updateNote)
        })
        .catch(error => next(error))
})

module.exports = notesRouter