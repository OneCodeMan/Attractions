var sortBy = 'most-liked';
var limit = 6;

var iu = new Instafeed({
    get: 'user',
    userId: '1692800026',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>IU Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var suzy = new Instafeed({
	get: 'user',
    userId: '1507979106',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Suzy Likes: {{likes}} Comments: {{comments}}</p> </div>`
});

var hyuna = new Instafeed({
	get: 'user',
    userId: '491862741',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Hyuna Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var jinseyun = new Instafeed({
	get: 'user',
    userId: '1460625898',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>JinSeYeon Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var minah = new Instafeed({
	get: 'user',
    userId: '6731991',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Minah Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var ayeon = new Instafeed({
	get: 'user',
    userId: '2099784424',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Ayeon Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var juwoo = new Instafeed({
	get: 'user',
    userId: '1535505290',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Juwoo Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var victoria = new Instafeed({
	get: 'user',
    userId: '600694929',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Victoria Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var jei = new Instafeed({
	get: 'user',
    userId: '1648065138',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Jei Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var sooyoung = new Instafeed({
	get: 'user',
    userId: '1078607901',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Sooyoung Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var hyeri = new Instafeed({
	get: 'user',
    userId: '1559113799',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Hyeri Likes: {{likes}} Comments: {{comments}}</p></div>`
});

$("#kpop1").click(function() {
    iu.run();
    $(this).attr("disabled", true);
});

$("#kpop2").click(function() {
    suzy.run();
    $(this).attr("disabled", true);
});

$("#kpop3").click(function() {
    hyuna.run();
    $(this).attr("disabled", true);
});

$("#kpop4").click(function() {
    jinseyun.run();
    $(this).attr("disabled", true);
});

$("#kpop5").click(function() {
    minah.run();
    $(this).attr("disabled", true);
});

$("#kpop6").click(function() {
    ayeon.run();
    $(this).attr("disabled", true);
});

$("#kpop7").click(function() {
    juwoo.run();
    $(this).attr("disabled", true);
});

$("#kpop8").click(function() {
    victoria.run();
    $(this).attr("disabled", true);
});

$("#kpop9").click(function() {
    jei.run();
    $(this).attr("disabled", true);
});

$("#kpop10").click(function() {
    sooyoung.run();
    $(this).attr("disabled", true);
});

$("#kpop11").click(function() {
    hyeri.run();
    $(this).attr("disabled", true);
});