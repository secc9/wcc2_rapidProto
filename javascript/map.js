// src="./javascript/map.js"
        const map = L.map('map').setView([51.505, -0.09], 3);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// <!-- paula -->
// icon image


/////////////////////IEVA

//set icon image
const ieva = L.icon({
    iconUrl: './assets/images/IV selfie.jpg',
    iconSize: [32,32],
    iconAnchor:[25,16]
})


// location mark
var marker = L.marker([54.897108, 23.919936], {icon: ieva}).addTo(map);

// image of place and description/name
marker.bindPopup("<p>Laisvės Alėja </b> <img src='./assets/images/laisves-aleja.jpg' style='width:100%;height:100%;'></p>").openPopup();


// var popup = L.popup()
//     .setLatLng([51.507685, -0.099073])
//     .setContent("Laisves Aleja")
//     .openOn(map);


    // create a red polyline from an array of LatLng points
var latlngs = [
    [54.897108, 23.919936],
    [53.828217, -1.566547],
    [34.04, -118.2]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());


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

// var popup = L.popup()
//   .setLatLng([51.507685, -0.099073])
//   .setContent("Tate Modern")
//   .openOn(map);