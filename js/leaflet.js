
/* Simulacre de leaflet.js — à remplacer par la vraie lib si besoin */
window.L = {
    map: function () { return { setView: function(){}, addLayer: function(){} }; },
    tileLayer: { wms: function(){ return {}; } },
    timeDimension: {},
    TimeDimension: function(){},
    timeDimensionControl: true
};
