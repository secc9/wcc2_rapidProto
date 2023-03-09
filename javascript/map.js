//add map
       
       const map = L.map('map').setView([51.505, -0.09], 3);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//locations

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



    // create a red polyline from an array of LatLng points
var latlngs = [
  //ieva
    [54.897108, 23.919936], //ieva
    [53.828217, -1.566547], //ash
    [54.897108, 23.919936], //ieva
    [8.233420, -73.353310], //paula
    [54.897108, 23.919936], //ieva
    [26.922070, 75.778885], //kruti
    [54.897108, 23.919936], //ieva
    [25.2702, 91.7323], //ashish

  //ash
  
  [53.828217, -1.566547], //ash
  [8.233420, -73.353310], //paula
  [53.828217, -1.566547], //ash
  [26.922070, 75.778885], //kruti
  [53.828217, -1.566547], //ash
  [25.2702, 91.7323], //ashish

  //paula
  [8.233420, -73.353310], //paula
  [26.922070, 75.778885], //kruti
  [8.233420, -73.353310], //paula
  [25.2702, 91.7323], //ashish

  //kruti
  [26.922070, 75.778885], //kruti
  [25.2702, 91.7323] //ashish



];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());


//////////////////PAULA

// icon paula
const paula = L.icon({
  iconUrl: './assets/images/paula.jpg', 
  iconSize: [32,32],
  iconAnchor:[25,16]
})


// marker

var marker1 = L.marker([8.233420, -73.353310], {icon: paula}).addTo(map);


//add your info of the location
marker1.bindPopup("<p>Ocaña </b> <img src='./assets/images/ocaña.jpg' style='width:100%;height:100%;'></p>").openPopup();



////////////////////KRUTI
/////Jaipur

const kruti = L.icon({
  iconUrl: './assets/images/kruti selfie.jpg',//change picture
  iconSize: [32,32],
  iconAnchor:[25,16]
})

// marker of Jaipur
var marker = L.marker([26.922070, 75.778885], {icon: kruti}).addTo(map);

//add your info of the location
marker.bindPopup("<p>Jaipur </b> <img src='./assets/images/jaipur.jpg' style='width:100%;height:100%;'></p>").openPopup();


///////////////ASHISH

/////Cherrapunji
const ashish2 = L.icon({
  iconUrl: './assets/images/ashishplace.jpeg',//change picture
  iconSize: [32,32],
  iconAnchor:[25,16]
})


// marker of Cherrapunji
var marker2 = L.marker([25.2702, 91.7323], {icon: ashish2}).addTo(map);

marker2.bindPopup("<p>Cherrapunji </b> <img src='./assets/images/ashish.jpeg' style='width:100%;height:100%;'></p>").openPopup();


//////////////ASH

const ash = L.icon({
  iconUrl: './assets/images/ash_image.jpeg',
  iconSize: [32,32],
  iconAnchor:[25,16]
})

// marker of leeds
var marker = L.marker([53.828217, -1.566547], {icon: ash}).addTo(map);


// marker of Leighton Reservoir 
//add your info of the location
marker.bindPopup("<p>Leighton Reservoir </b> <img src='./assets/images/reservoir.jpg' style='width:100%;height:100%;'></p>").openPopup();
