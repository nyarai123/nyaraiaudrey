var buildIcon = L.icon({
	iconUrl: 'http://pngimg.com/uploads/bank/bank_PNG25.png',
	iconSize: [60, 50], // size of the icon
	iconAnchor: [20, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.992722, 30.343310], {
	icon: buildIcon
}).addTo(map);
var forest1Icon = L.icon({
	iconUrl: 'http://pngimg.com/uploads/tree/tree_PNG3495.png',
	iconSize: [60, 65], // size of the icon
	iconAnchor: [20, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.994569, 30.338580], {
	icon: forest1Icon
}).addTo(map);
var forest2Icon = L.icon({
	iconUrl: 'http://pngimg.com/uploads/tree/tree_PNG3495.png',
	iconSize: [60, 65], // size of the icon
	iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.992000, 30.340134], {
	icon: forest2Icon
}).addTo(map);
var botsadIcon = L.icon({
	iconUrl: 'http://pngimg.com/uploads/green_leaves/green_leaves_PNG3678.png',
	iconSize: [60, 65], // size of the icon
	iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
	popupAnchor: [0, 40] // point from which the popup should open relative to the iconAnchor
});
L.marker([59.993438, 30.341597], {
	icon: botsadIcon
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
L.marker([59.992722, 30.343310], {
	icon: buildIcon
}).bindPopup(" Санкт-Петербу́ргский госуда́рственный лесотехни́ческий университе́т им. С. М. Ки́рова (СПбГЛТУ) (известен также как Лесотехническая академия, ЛТА) — высшее учебное заведение Санкт-Петербурга, основанное в 1803 году указом императора Александра I.Санкт-Петербургский государственный лесотехнический университет — это государственное высшее учебное заведение, которое реализует образовательные программы высшего и послевузовского профессионального образования; осуществляет подготовку, переподготовку и повышение квалификации специалистов высшей квалификации для производственной, научной и научно-педагогической деятельности в области лесного хозяйства, лесной, деревообрабатывающей, лесохимической, целлюлозно-бумажной, гидролизной промышленности; выполняет фундаментальные и прикладные научные исследования. Университет является ведущим научным и методическим центром высших лесотехнических учебных заведений Российской Федерации ").addTo(map);
L.marker([59.994569, 30.338580], {
	icon: forest1Icon
}).bindPopup("Великая Отечественная война и блокада Ленинграда нанесли саду большой ущерб. Особенно пострадал Верхний дендросад: если в 1935-1936 гг. в нем числилось более 1200 видов и форм древесных растений и 3850 экз., то после войны осталось всего 800 видов и форм и около 2155 экземпляров.").addTo(map);
L.marker([59.992000, 30.340134], {
	icon: forest2Icon
}).bindPopup("Нижний дендросад – это первый дендрарий на территории Лесного института. Дендросад был заложен в 1833году в честь 30-летия основания Лесного института. В 2008г. Нижнему дендросаду исполнилось 175 лет. Он является одним из старейших дендросадов России.").addTo(map);
L.marker([59.993438, 30.341597], {
	icon: botsadIcon
}).bindPopup("Ботанический сад был организован на базе садово-паркового хозяйства академии (дендрариев, питомников, парка, оранжереи и цветочных плантаций) с общей площадью 43,7 га. Исполняющим обязанности директора Ботанического сада был назначен В.И. Дрожжин, научным руководителем – доцент Ф.А. Чепик.").addTo(map);
var popup = L.popup().setLatLng([59.9955, 30.3401]).setContent("Здравствуйте! Добро пожаловать на территорию Парка Лесотехнической академии").openOn(map);