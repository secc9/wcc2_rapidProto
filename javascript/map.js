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

// icon paula
const paula = L.icon({
  iconUrl: './assets/images/ocaña.jpg',
  iconSize: [32,32],
  iconAnchor:[25,16]
})

//second picture
const paula2 = L.icon({
  iconUrl: './assets/images/cartagena.jpg',
  iconSize: [32,32],
  iconAnchor:[25,16]
})

//third picture
const paula3 = L.icon({
  iconUrl: './assets/images/san pio.jpg',
  iconSize: [32,32],
  iconAnchor:[25,16]
})

// col marker
var marker1 = L.marker([8.233420, -73.353310], {icon: paula}).addTo(map);

var marker2 = L.marker([10.391049, -75.479424], {icon: paula2}).addTo(map);

var marker3 = L.marker([7.11897, -73.10940], {icon: paula3}).addTo(map);

var popup1 = L.popup()
    .setLatLng([7.06980, -73.10743])
    .setContent("Ocaña")
    .openOn(map);

var popup2 = L.popup()
    .setLatLng([7.11897, -73.10940])
    .setContent("Cartagena")
    .openOn(map);

var popup1 = L.popup()
    .setLatLng([7.06921, -73.10560])
    .setContent("San Pio Park")
    .openOn(map);



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