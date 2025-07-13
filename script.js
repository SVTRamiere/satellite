var map = L.map('map').setView([48.3, -4.3], 6);

var satellite = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Couches météo (fictives, en attente de vraies URLs)
var clouds = L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');
var precip = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');
var temp = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');
var wind = L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');

var baseMaps = { "Satellite": satellite };
var overlayMaps = {
    "Nuages": clouds,
    "Précipitations": precip,
    "Température": temp,
    "Vent": wind
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
