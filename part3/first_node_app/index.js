const express= require('express')
const app = express()
const cors = require('cors')
const Note = require('./models/note')


let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
      }
]

const errorHandler = (err, req, res, next) => {
    console.log(err.message)

    if(err.name === 'CastError'){
        return res.status(400).send({error: "malformatted id"})
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

app.post('/api/notes', (req, res) => {  

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
    })
})



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
