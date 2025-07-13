
// leaflet.js (version allégée pour démo)
window.L = {
    map: function(id, opts) {
        document.getElementById(id).innerHTML = '<div style="color:white;text-align:center;margin-top:50%;">Carte chargée</div>';
        return {
            setView: function() {},
            addLayer: function() {}
        };
    },
    tileLayer: {
        wms: function() { return {}; }
    },
    timeDimension: {},
    TimeDimension: function() {},
    timeDimensionControl: true,
    timeDimension: { layer: { wms: function() {
        return { addTo: function() {} };
    } } }
};
