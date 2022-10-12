const socket = io()
const map = L.map('map-container').setView([-24.793583, -65.419647],13.5)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({watch: true, enableHighAccuracy:true})
map.on('locationfound', (e) => {
    const cords = [e.latitude, e.longitude]
    socket.emit("clientCoords", cords)
})
socket.on("serverCoords", async (coords) => {
    const marker = L.marker(coords)
    map.removeLayer(marker)
    marker.bindPopup("Estas aqui!")
    map.addLayer(marker);
    })
    

