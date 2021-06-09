const express= require('express')
const app = express()
const cors = require('cors')
const Note = require('./models/note')


const errorHandler = (err, req, res, next) => {
    console.log(err.message)

    if(err.name === 'CastError'){
        return res.status(400).send({err: "malformatted id"})
    } else if(err.name === 'ValidationError'){
        return res.status(400).json({ err : err.message})
    }
    next(err)
}
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(errorHandler)


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
    
})

app.get('/api/notes/:id',  (req, res, next) => {
    const id = req.params.id
    Note.findById(id).then(note => {
        if(note){
            res.json(note)
        } else {
            res.status(404).end()
        }
        
    })
    .catch(err => {err => next(err)})
    
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    Note.findByIdAndRemove(id)
        .then(result => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

app.post('/api/notes', (req, res, next) => {  

    const body = req.body

    if(body.content === undefined){
        return res.status(400).json({error: 'content missing'})
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date()
    })

    note.save().then(savedNote => {
        res.json(savedNote)
    }).catch(err => next(err))
})

app.put('/api/notes/:id', (req, res, next) => {
    const {content, important} = req.body
    const note = {
        content,
        important
    }

    Note.findByIdAndUpdate(req.params.id, note, {new:true})
        .then(updateNote => {
            res.json(updateNote)
        })
        .catch(err => next(err))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
