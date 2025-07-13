
document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([48.5, -2.5], 6);

    const baselayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const temp = L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');
    const clouds = L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');
    const precip = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');
    const wind = L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=0b9fa4a8f48537427496561d2fb532bb');

    const overlays = {
        "Température": temp,
        "Nuages": clouds,
        "Précipitations": precip,
        "Vent": wind
    };

    L.control.layers(null, overlays).addTo(map);

    document.getElementById("zoom-bretagne").addEventListener("click", () => {
        map.setView([48.4, -3.2], 8);
    });

    document.getElementById("capture").addEventListener("click", () => {
        html2canvas(document.querySelector("#map")).then(canvas => {
            const link = document.createElement("a");
            link.download = "carte_meteo.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    });
});
