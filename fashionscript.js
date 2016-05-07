var sortBy = 'most-liked';
var limit = 6;

var korean = new Instafeed({
    get: 'user',
    userId: '190105581',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var american = new Instafeed({
    get: 'user',
    userId: '13336763',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var chinese = new Instafeed({
    get: 'user',
    userId: '15858521',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

var japanese = new Instafeed({
    get: 'user',
    userId: '1577308828',
    accessToken: '437610073.467ede5.2d081056938f44de98c19206cd1e9d2b',
    limit: limit,
    sortBy: sortBy,
    resolution: 'low_resolution', 
    template: `<div class="window"><img src="{{image}}"> 
              <p>Likes: {{likes}} Comments: {{comments}}</p></div>`
});

$("#korean").click(function() {
    korean.run();
    $(this).attr("disabled", true);
});

$("#american").click(function() {
    american.run();
    $(this).attr("disabled", true);
});

$("#chinese").click(function() {
    chinese.run();
    $(this).attr("disabled", true);
});

$("#japanese").click(function() {
    japanese.run();
    $(this).attr("disabled", true);
});
