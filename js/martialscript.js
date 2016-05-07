var sortBy = 'most-liked';
var limit = 6;

var boxing = new Instafeed({
    get: 'user',
    userId: '24275124',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var muaythai = new Instafeed({
    get: 'user',
    userId: '27618408',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var bjj = new Instafeed({
    get: 'user',
    userId: '1564355328',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var wrestling = new Instafeed({
    get: 'user',
    userId: '31892576',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var mma = new Instafeed({
    get: 'user',
    userId: '18153645',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});


$("#boxing").click(function() {
    boxing.run();
    $(this).attr("disabled", true);
});

$("#muaythai").click(function() {
    muaythai.run();
    $(this).attr("disabled", true);
});

$("#bjj").click(function() {
    bjj.run();
    $(this).attr("disabled", true);
});

$("#wrestling").click(function() {
    wrestling.run();
    $(this).attr("disabled", true);
});

$("#mma").click(function() {
    mma.run();
    $(this).attr("disabled", true);
});