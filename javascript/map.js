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
/////Jaipur
const kruti = L.icon({
  iconUrl: './assets/images/jaipur.jpg',//change picture
  iconSize: [32,32],
  iconAnchor:[25,16]
})




// marker of Jaipur
var marker = L.marker([26.922070, 75.778885], {icon: kruti}).addTo(map);



var popup = L.popup()
  .setLatLng([26.922070, 75.778885])
  .setContent("Jaipur")
  .openOn(map);

/////Auroville
const kruti2 = L.icon({
  iconUrl: './assets/images/auroville.jpg',//change picture
  iconSize: [32,32],
  iconAnchor:[25,16]
})




// marker of Auroville
var marker = L.marker([11.9352, 79.8238], {icon: kruti2}).addTo(map);



var popup = L.popup()
  .setLatLng([11.9352, 79.8238])
  .setContent("Auroville")
  .openOn(map);

/////Mumbai
const kruti3 = L.icon({
  iconUrl: './assets/images/Mumbai.jpg',//change picture
  iconSize: [32,32],
  iconAnchor:[25,16]
})




// marker of Mumbai
var marker = L.marker([19.076090, 72.877426], {icon: kruti3}).addTo(map);



var popup = L.popup()
  .setLatLng([19.076090, 72.877426])
  .setContent("Mumbai")
  .openOn(map);

/////Hampi
const kruti4 = L.icon({
  iconUrl: './assets/images/hampi.jpg',//change picture
  iconSize: [32,32],
  iconAnchor:[25,16]
})




// marker of Hampi
var marker = L.marker([15.334022, 76.468536], {icon: kruti4}).addTo(map);



var popup = L.popup()
  .setLatLng([15.334022, 76.468536])
  .setContent("Hampi")
  .openOn(map);







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