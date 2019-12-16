const apiLink = 'https://api.mapbox.com/styles/v1/ayratibra/ck2yzbm0w3vqv1cmcpo7s91wi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXlyYXRpYnJhIiwiYSI6ImNrMjRmbWQxcTE5dXczYm55ejQ3ZWlqbTkifQ.f30GppH8mldSpCV749eTbQ'
let layer;
let layerLabels;
const labels = ['Oceans', 'Gray', 'DarkGray', 'ShadedRelief'];
const imageryLabels = ['Imagery', 'ImageryClarity', 'ImageryFirefly'];

function initBackButton() {
	$('#back-btn').on('click', event => {
		window.history.back();
		event.preventDefault();
	})
}
init();

function init() {
	constructor();
	initBackButton();
	handleMapSelection();
	addPointsToMap();
}

function constructor() {
	map = L.map('map').setView([59.994, 30.34], 15);
	layer = L.tileLayer(apiLink).addTo(map)
}

function handleMapSelection() {
	document.querySelector('.map-selector').addEventListener('change', event => {
		const chosenMap = event.target.value;
		changeMap(chosenMap);
	});
}

function changeMap(chosenMap) {
	clearMap();
	setMapLayer(chosenMap);
	chooseAndAddLayerLabelsToMap(chosenMap);
}

function clearMap() {
	if(layer) {
		map.removeLayer(layer);
	}
	if(layerLabels) {
		map.removeLayer(layerLabels);
	}
}

function setMapLayer(chosenMap) {
	if(chosenMap === 'Park') {
		layer = L.tileLayer(apiLink);
	} else {
		layer = L.esri.basemapLayer(chosenMap);
	}
	map.addLayer(layer);
}

function chooseAndAddLayerLabelsToMap(chosenMap) {
	if(labels.includes(chosenMap)) {
		addLayerLabelsToMap(chosenMap + 'Labels');
	} else if(imageryLabels.includes(chosenMap)) {
		addLayerLabelsToMap('ImageryLabels');
	}
}

function addLayerLabelsToMap(labels) {
	layerLabels = L.esri.basemapLayer(labels);
	map.addLayer(layerLabels);
}

function addPointsToMap() {
	$.getJSON("marker.js", point => {
		L.geoJSON(point, {
			pointToLayer: (feature, coordinates) => {
				return L.marker(coordinates).bindPopup(feature.properties.title)
			}
		}).addTo(map);
	});
}