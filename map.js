var map = L.map('map').setView([37.75, -122.23], 10);

var layer = L.esri.basemapLayer('Topographic').addTo(map);
var layerLabels;

function setBasemap (basemap) {
if (layer) {
map.removeLayer(layer);
}

layer = L.esri.basemapLayer(basemap);

map.addLayer(layer);

if (layerLabels) {
map.removeLayer(layerLabels);
}

if (
basemap === 'ShadedRelief' ||
basemap === 'Oceans' ||
basemap === 'Gray' ||
basemap === 'DarkGray' ||
basemap === 'Terrain'
) {
layerLabels = L.esri.basemapLayer(basemap + 'Labels');
map.addLayer(layerLabels);
} else if (basemap.includes('Imagery')) {
layerLabels = L.esri.basemapLayer('ImageryLabels');
map.addLayer(layerLabels);
}
}

document
.querySelector('#basemaps')
.addEventListener('change', function (e) {
var basemap = e.target.value;
setBasemap(basemap);
});
 