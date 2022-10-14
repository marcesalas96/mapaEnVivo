const socket = io()
const map = L.map('map-container').setView([-24.793583, -65.419647], 12.8)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



setInterval(() => {
    navigator.geolocation.getCurrentPosition(e => {
        const { latitude, longitude } = e.coords
        const cords = [latitude, longitude]
        socket.emit("clientCoords", cords);
    })
}, 5000)


let marker
socket.on("serverCoords", async (coords) => {
    if (marker) {
        console.log("Entre if")
        map.removeLayer(marker)
    }
    marker = L.marker(coords)
    marker.bindPopup("Estas aqui!")
    map.addLayer(marker);
})


