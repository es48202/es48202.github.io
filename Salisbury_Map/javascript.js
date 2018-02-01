function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

function onEachCampus(feature, layer) {
	layer.on({
		click: zoomToFeature
	});
	popupOptions = {maxWidth: 250};
	layer.bindPopup( feature.properties.BuildingNa,popupOptions);
	}
	
function onEachPark(feature, layer) {
	layer.on({
		click: zoomToFeature
	});
	popupOptions = {maxWidth: 250};
	layer.bindPopup( feature.properties.name,popupOptions);
	}
	
var a = L.geoJSON(campus, {
	style: buildingStyle,
	onEachFeature: onEachCampus
	});

var b = L.geoJSON(parks, {
	style: parkStyle,
	onEachFeature: onEachPark
	});	
	
var aShp = L.layerGroup([a]),
	bShp = L.layerGroup([b]);

//restricts the view of the user
var swcorner = L.latLng(38.2, -75.9),
	necorner = L.latLng(38.5, -75.3),
	bounds = L.latLngBounds(swcorner, necorner);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	minZoom: 12,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = L.map('map', {layers: osm})
	.setView([38.365749, -75.59818], 14)
	.setMaxBounds(bounds);
	
//ICONS
var coffeeIcon = L.icon({iconUrl: 'images/coffee.png', iconSize: [40,40]}),
	beerIcon = L.icon({iconUrl: 'images/beer.png', iconSize: [40,40]}),
	barIcon = L.icon({iconUrl: 'images/bars.png', iconSize: [40,40]}),	
	churchIcon = L.icon({iconUrl: 'images/church.png', iconSize: [40,40]}),
	gasIcon = L.icon({iconUrl: 'images/gas.png', iconSize: [40,40]}),
	foodIcon = L.icon({iconUrl: 'images/food.png', iconSize: [40,40]}),
	bankIcon = L.icon({iconUrl: 'images/bank.png', iconSize: [40,40]}),
	shopsIcon = L.icon({iconUrl: 'images/shop.png', iconSize: [40,40]}),
	bowlIcon = L.icon({iconUrl: 'images/bowl.png', iconSize: [40,40]}),
	autoIcon = L.icon({iconUrl: 'images/auto.png', iconSize: [40,40]}),
	zooIcon = L.icon({iconUrl: 'images/zoo.png', iconSize: [40,40]}),
	birdIcon = L.icon({iconUrl: 'images/bird.png', iconSize: [40,40]}),
	hospitalIcon = L.icon({iconUrl: 'images/hospital.png', iconSize: [40,40]}),
	policeIcon = L.icon({iconUrl: 'images/police.png', iconSize: [40,40]}),
	airportIcon = L.icon({iconUrl: 'images/airport.png', iconSize: [40,40]}),
	synagogueIcon = L.icon({iconUrl: 'images/synagogue.png', iconSize: [40,40]}),
	hinduIcon = L.icon({iconUrl: 'images/hindu.png', iconSize: [40,40]}),
	busIcon = L.icon({iconUrl: 'images/bus.png', iconSize: [40,40]});

//GAS STATIONS
var royalFarms = L.marker([38.336333,-75.599319],{icon:gasIcon}).bindPopup("Royal Farms"),
	thirstys = L.marker([38.348849,-75.601508],{icon:gasIcon}).bindPopup("Thirsty's"),
	cheers = L.marker([38341697,-75.605792],{icon:gasIcon}).bindPopup("Cheers");
	
var gasStations = L.layerGroup([royalFarms, thirstys, cheers]);

//FOOD AND DRINK
	//RESTAURANTS
var chickFila = L.marker([38.343351,-75.607235],{icon:foodIcon}).bindPopup("Chick-fil-a"),
	winginIt = L.marker([38.341216,-75.606344],{icon:foodIcon}).bindPopup("Wingin' It"),
	auntieAnne = L.marker([38.344838,-75.604786],{icon:foodIcon}).bindPopup("Auntie Anne's"),
	//BREWERIES
	EVO = L.marker([38.361807,-75.595998],{icon:beerIcon}).bindPopup("Evolution Brewing"),
	rubberSoul = L.marker([38.391725,-75.584301],{icon:beerIcon}).bindPopup("Rubber Soul Brewing"),
	//BARS
	mojos = L.marker([38.365719,-75.597691],{icon:barIcon}).bindPopup("Mojo's"),
	brewRiver = L.marker([38.364582,-75.606075],{icon:barIcon}).bindPopup("Brew River"),
	roadieJoes = L.marker([38.365527,-75.602234],{icon:barIcon}).bindPopup("RoadieJoes"),
	hoppers = L.marker([38.3412,-75.606397],{icon:barIcon}).bindPopup("Hoppers"),
	//COFFEE SHOPS
	starbucks = L.marker([38.342623,-75.605393],{icon:coffeeIcon}).bindPopup("Starbucks"),
	riseUp1 = L.marker([38.348263,-75.597179],{icon:coffeeIcon}).bindPopup("Rise Up"),
	riseUp2 = L.marker([38.363058,-75.60509],{icon:coffeeIcon}).bindPopup("Rise Up");
	
var foodDrink = L.layerGroup([chickFila, winginIt, auntieAnne, EVO, rubberSoul, mojos, 
	brewRiver, roadieJoes, hoppers, starbucks, riseUp1, riseUp2]);

//BANKS
var PNC = L.marker([38.33643,-75.608915],{icon:bankIcon}).bindPopup("PNC Bank"),
	BBT = L.marker([38.341696,-75.604475],{icon:bankIcon}).bindPopup("BB&T"),
	SECU = L.marker([38.368572,-75.575865],{icon:bankIcon}).bindPopup("SECU"),
	BoA = L.marker([38.345446,-75.6026],{icon:bankIcon}).bindPopup("Bank of America");
	
var banks = L.layerGroup([PNC,BBT, SECU, BoA]);

//SHOPS 
var walmart1 = L.marker([38.328254,-75.61029],{icon:shopsIcon}).bindPopup("Walmart"),
	walmart2 = L.marker([38.417359,-75.569138],{icon:shopsIcon}).bindPopup("Walmart"),
	foodLion1 = L.marker([38.351185,-75.582305],{icon:shopsIcon}).bindPopup("Food Lion"),
	foodLion2 = L.marker([38.367914,-75.549169],{icon:shopsIcon}).bindPopup("Food Lion"),
	theMall = L.marker([38.399412,-75.56669],{icon:shopsIcon}).bindPopup("The Centre at Salisbury");
	
var shops = L.layerGroup([walmart1, walmart2, foodLion1, foodLion2, theMall]);

//RECREATION
var southbound = L.marker([38.332624,-75.611949],{icon:bowlIcon}).bindPopup("Southbound Alley"),
	theZoo = L.marker([38.360138,-75.58069],{icon:zooIcon}).bindPopup("Salisbury Zoological Park");

var recreation = L.layerGroup([southbound, theZoo]);

//AUTO REPAIR
var burnettWhite = L.marker([38.365236,-75.593741],{icon:autoIcon}).bindPopup("Burnett-White Tire Pros"),
	firestone = L.marker([38.356887,-75.599696],{icon:autoIcon}).bindPopup("Firestone Complete Auto Care");

var autoRepair = L.layerGroup([burnettWhite, firestone]);

//CULTURAL
var wardMuseum = L.marker([38.351417,-75.57167],{icon:birdIcon}).bindPopup("The Ward Museum"),
	//RELIGIOUS CENTERS
	stFrancis = L.marker([38.361272,-75.605221],{icon:churchIcon}).bindPopup("St. Francis de Sales Catholic Church"),
	bethIsrael = L.marker([38.359824,-75.605405],{icon:synagogueIcon}).bindPopup("Beth Israel Synagogue"),
	hinduTemple = L.marker([38.376201,-75.553334],{icon:hinduIcon}).bindPopup("Hindu Temple"),
	stAlbans = L.marker([38.366086,-75.569921],{icon:churchIcon}).bindPopup("St. Albans Episcopal Church");


var cultural = L.layerGroup([wardMuseum, stFrancis, bethIsrael, hinduTemple, stAlbans]);

//SERVICES
var airport = L.marker([38.343379,-75.517104],{icon:airportIcon}).bindPopup("Salisbury Airport"),
	police = L.marker([38.368047,-75.609703],{icon:policeIcon}).bindPopup("Police Station"),
	hospital = L.marker([38.361398,-75.599137],{icon:hospitalIcon}).bindPopup("Peninsula Regional Medical Center");
	
var services = L.layerGroup([airport, police, hospital]);	
	
//BUS STOPS 
var busStop1 = L.marker([38.344687,-75.603423],{icon:busIcon}).bindPopup("Bus Stop"),
	busStop2 = L.marker([38.343783,-75.604399],{icon:busIcon}).bindPopup("Bus Stop"),
	busStop3 = L.marker([38.354481,-75.600868],{icon:busIcon}).bindPopup("Bus Stop");
	
var busStops = L.layerGroup([busStop1, busStop2, busStop3]);

var baseMaps = {"Open Street Map": osm};

var overLays = {
	"Campus Buildings": aShp,
	"Parks":bShp,
	"Food and Drink": foodDrink,
	"Gas Stations": gasStations,
	"Bus Stops": busStops,
	"Banks": banks,
	"Shops": shops,
	"Recreation": recreation,
	"Auto Repair Shops": autoRepair,
	"Cultural": cultural,
	"Services": services
};

L.control.layers(baseMaps, overLays).addTo(map);