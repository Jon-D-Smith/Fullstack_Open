const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/notes-app', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const noteSchema = new mongoose.Schema({
content: String,
date: Date,
important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(results => {
    results.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})

//Generate and save a new note

// const note = new Note({
//     content: 'HTML is easy',
//     date: new Date(),
//     important: true
// })

// note.save().then(result => {
//     console.log('note saved')
//     console.log(note)
//     mongoose.connection.close()
// })