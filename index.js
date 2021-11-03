const express = require('express')

const PORT = 5000
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(express.static('assets')) // soporte de archivos estaticos
app.set('view engine', 'ejs') // Configuramos el motor de templates

// ENDPOINTS

app.get('/', (req, res) => {
    const listaEventos = [
        {
            id : 1,
            nombre : 'Torneo Marzo 2021'
        },
        {
            id : 2,
            nombre : 'Torneo Junio 2021'
        },
        {
            id : 3,
            nombre : 'Torneo Setiembre 2021'
        }
    ]

    const listaTopPlayers = [
        {
            nombre : 'billy',
            maps : 45,
            rounds : 37,
            k_d : 6,
            k__d : 5,
            rating : 4
        },
        {
            nombre : 'joaquin',
            maps : 56,
            rounds : 37,
            k_d : 6,
            k__d : 5,
            rating : 4
        },
        {
            nombre : 'alessandra',
            maps : 40,
            rounds : 33,
            k_d : 3,
            k__d : 5,
            rating : 5
        }
    ]


    res.render('index', {
        eventos : listaEventos,
        topPlayers : listaTopPlayers
    })
})

app.get('/torneos', (req, res)=> {
    res.render('torneos')
})

app.get('/login', (req, res)=> {
    res.render('login')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username == "pw" && password == "123") {
        // Login correcto
        res.redirect("/torneos")
    }else {
        res.redirect('/login')
    }
})

app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})