const socket = io()
const map = L.map('map-container').setView([-24.793583, -65.419647],13.5)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({watch: true, enableHighAccuracy:true})
map.on('locationfound', (e) => {
    const cords = [e.latitude, e.longitude]
    const marker = L.marker(cords)
    marker.bindPopup("Estas aqui!")
    map.addLayer(marker);
    socket.emit("clientCoords", cords)
})

socket.on("serverCoords", (coords) => {
    const marker = L.marker(coords)
    marker.bindPopup("Estas aqui!")
    map.addLayer(marker);
})

