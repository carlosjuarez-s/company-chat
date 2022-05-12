const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

var middleware = (req, res, next) => {
    console.log("Me gusta la pizza")
    next()
}

var middleware2 = (req, res, next) => {
    console.log("Me gusta la pizza 2")
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//app.use(express.static('public'))
app.use('/', middleware, middleware2)

app.listen(PORT, () => {
    console.log("Server on, Port: " + PORT)
})