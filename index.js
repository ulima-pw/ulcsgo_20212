const express = require('express')

const PORT = 5000
const app = express()

app.use(express.static('assets')) // soporte de archivos estaticos
app.set('view engine', 'ejs') // Configuramos el motor de templates

// ENDPOINTS

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})