const express = require('express')
const path = require('path')
const { Server: IOServer } = require('socket.io')
const router = require('./routes/index')
const socketIo = require('./sockets/socket')


const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use('/', router)

const expressServer = app.listen(8000, () => {
    console.log("Server en puerto 8000")
})
const io = new IOServer(expressServer)
socketIo(io)