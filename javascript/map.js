// src="./javascript/map.js"
        const map = L.map('map').setView([51.505, -0.09], 3);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// <!-- paula -->
// icon image


/////////////////////IEVA
const ieva = L.icon({
    iconUrl: './assets/images/IV selfie.jpg',
    iconSize: [32,32],
    iconAnchor:[25,16]
})



// marker of tate
var marker = L.marker([51.507685, -0.099073], {icon: ieva}).addTo(map);



var popup = L.popup()
    .setLatLng([51.507685, -0.099073])
    .setContent("Tate Modern")
    .openOn(map);


    


//////////////////PAULA



////////////////////KRUTI








///////////////ASHISH










//////////////ASH

const ash = L.icon({
  iconUrl: './assets/images/ash_image.jpeg',
  iconSize: [32,32],
  iconAnchor:[25,16]
})

// marker of leeds
var marker = L.marker([53.828217, -1.566547], {icon: ash}).addTo(map);

var popup = L.popup()
  .setLatLng([51.507685, -0.099073])
  .setContent("Tate Modern")
  .openOn(map);