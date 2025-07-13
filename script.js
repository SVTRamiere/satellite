const map = L.map("map").setView([48.5, -2.7], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const precip = L.tileLayer("https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb");
const clouds = L.tileLayer("https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb");
const temp = L.tileLayer("https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb");
const wind = L.tileLayer("https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb");

precip.addTo(map);
clouds.addTo(map);
temp.addTo(map);
wind.addTo(map);

document.getElementById("precip").addEventListener("change", (e) => {
  if (e.target.checked) map.addLayer(precip);
  else map.removeLayer(precip);
});
document.getElementById("clouds").addEventListener("change", (e) => {
  if (e.target.checked) map.addLayer(clouds);
  else map.removeLayer(clouds);
});
document.getElementById("temp").addEventListener("change", (e) => {
  if (e.target.checked) map.addLayer(temp);
  else map.removeLayer(temp);
});
document.getElementById("wind").addEventListener("change", (e) => {
  if (e.target.checked) map.addLayer(wind);
  else map.removeLayer(wind);
});