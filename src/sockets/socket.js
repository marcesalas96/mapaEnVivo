let contador = 0
module.exports = socketIo = (io) => {
    io.on('connection', (socket) => {
        console.log("New socket conected, id: ", socket.id)
        socket.on("clientCoords", cords => {
            console.log(cords)
            io.emit("serverCoords", cords)
        })
    })
} 