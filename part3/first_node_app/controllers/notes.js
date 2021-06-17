const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (req, res) => {
    const notes = await Note.find({})
        res.json(notes)
    
})

notesRouter.get('/:id', async (req, res, next) => {
    try{
        const note = await Note.findById(req.params.id)
        
        if(note) {
            res.json(note)
        } else {
            res.status(404).end()
        }
    } catch(exception) {
        next(exception)
    }
   
        
})

notesRouter.post('/', async (req, res, next) => {
    const body = req.body

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    try {
        const savedNote = await note.save()
        
        res.json(savedNote)
    } catch(exception) {
        next(exception)
    } 

    
        
})

notesRouter.delete('/:id', async (req, res, next) => {
   try{
    await Note.findByIdAndRemove(req.params.id)
        res.status(204).end()
   } catch(exception) {
    next(exception)
   }
    
        
})

notesRouter.put('/:id', async (req, res, next) => {
    const body = req.body

    const note = {
        content: body.content,
        important: body.important
    }

    const updateNote = await Note.findByIdAndUpdate(req.params.id, note, { new: true })
                            .catch(error => {return res.status(400).end()})
    res.json(updateNote)
        
})

module.exports = notesRouter