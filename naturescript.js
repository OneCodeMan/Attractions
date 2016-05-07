var sortBy = 'most-liked';
var limit = 6;

var nature = new Instafeed({
    get: 'user',
    userId: '1988768',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var morenature = new Instafeed({
    get: 'user',
    userId: '1118221',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var evenmorenature = new Instafeed({
    get: 'user',
    userId: '1504627',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});


$("#nature").click(function() {
    nature.run();
    $(this).attr("disabled", true);
});

$("#morenature").click(function() {
    morenature.run();
    $(this).attr("disabled", true);
});

$("#evenmorenature").click(function() {
    evenmorenature.run();
    $(this).attr("disabled", true);
});
