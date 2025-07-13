
const map = L.map('map').setView([48.2, -1.7], 6);

const esriLayer = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Esri & contributors',
  maxZoom: 19
}).addTo(map);

const clouds = L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb', {
  attribution: 'Données © OpenWeatherMap'
});

const temp = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb', {
  attribution: 'Données © OpenWeatherMap'
});

const wind = L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb', {
  attribution: 'Données © OpenWeatherMap'
});

const precipitation = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb', {
  attribution: 'Données © OpenWeatherMap'
});

const baseLayers = {
  "Satellite Esri": esriLayer
};

const overlayLayers = {
  "Nuages": clouds,
  "Températures": temp,
  "Vent": wind,
  "Précipitations": precipitation
};

L.control.layers(baseLayers, overlayLayers).addTo(map);
