var unicon = L.icon({
	iconUrl: 'https://image.flaticon.com/icons/png/512/89/89037.png',
	iconSize: [60, 50], // size of the icon
	iconAnchor: [20, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.9420485, 30.2964576], {
	icon: unicon
}).addTo(map);
var unicon2 = L.icon({
	iconUrl: 'https://image.flaticon.com/icons/png/512/89/89037.png',
	iconSize: [60, 65], // size of the icon
	iconAnchor: [20, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.9417556, 30.2709015], {
	icon: unicon2
}).addTo(map);
var piller = L.icon({
	iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-HY0LbVtatHhgmFuWf7NjNSzljZN8urW_A8vhhHSyW8UQxtS&s',
	iconSize: [60, 65], // size of the icon
	iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.992000, 30.340134], {
	icon: piller
}).addTo(map);
var  unicon3 = L.icon({
	iconUrl: 'https://image.flaticon.com/icons/png/512/89/89037.png',
	iconSize: [60, 65], // size of the icon
	iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.9390709, 30.3136172], {
	icon: unicon3
}).addTo(map);
var polygon = L.polygon([
	[59.991956, 30.341224],
	[59.991938, 30.341410],
	[59.991761, 30.341639],
	[59.991658, 30.341618],
	[59.991620, 30.341781],
	[59.991699, 30.341886],
	[59.991878, 30.342037],
	[59.992045, 30.341889],
	[59.992125, 30.341374],
]).addTo(map);
L.marker([59.9420485, 30.2964576], {
	icon:  unicon
}).bindPopup(" Картография и геоинформатика.Наука и переосмысление.Федеральное государственное бюджетное образовательное учреждение высшего образования «Санкт-Петербу́ргский госуда́рственный университе́т» — один из старейших, крупнейших и ведущих классических университетов и один из важнейших центров науки, образования и культуры в России. ").addTo(map);
L.marker([59.9417556, 30.2709015], {
	icon: unicon2
}).bindPopup("Дистанционное зондирование и обработка данных, в университете проводятся исследования использования дистанционного зондирования,применения дистанционного зондирования и обработки данных.").addTo(map);
L.marker([59.992000, 30.340134], {
	icon: piller
}).bindPopup("В статье «Загадки Санкт-Петербурга» были показаны некоторые закономерности связанные с расположением города относительно других известных сооружений. Многие особенности возникают благодаря тому, что город достаточно точно лежит на 60-й широте и поэтому на него распространяются законы сферической геометрии связанные с таким положением. И они конечно не случайны. Но вот случайно ли возникновение Столицы именно в этом месте или нет - большой вопрос").addTo(map);
L.marker([59.9420485, 30.2964576], {
	icon: unicon3
}).bindPopup("Санкт-Петербургский государственный университет.").addTo(map);
var popup = L.popup().setLatLng([59.9420485, 30.2964576]).setContent("здравствуйте!добро пожаловать в Санкт-Петербургский государственный университет").openOn(map);