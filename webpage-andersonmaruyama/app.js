const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const homeRoute = require('./src/routes/home.router')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Routes
app.get('/', homeRoute)

app.use((req, res, next)=> {
    res.status(404).render('404')
})

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`)
})