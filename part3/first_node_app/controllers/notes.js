const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')

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

    const user = await User.findById(body.userId)

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
        user: user._id
    })
        const savedNote = await note.save() 
        user.notes = user.notes.concat(savedNote._id)
        await user.save()      
        res.json(savedNote)      
})

notesRouter.delete('/:id', async (req, res) => {
    await Note.findByIdAndRemove(req.params.id)
        res.status(204).end()      
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