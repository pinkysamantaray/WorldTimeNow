// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log(message.txt);
    
//     let paragraphs = document.getElementsByTagName('p');
//     for(p of paragraphs){
//         p.style['background-color'] = '#00ff00';
//     }
// });

    
var timezones = moment.tz.names();
var options = document.getElementsByClassName('dlTimeZone');
for (var i = 1; i < timezones.length; i++) {
    options[i] = $(options[i-1]).clone()
                                .text(timezones[i])
                                .val(timezones[i])
                                .insertAfter($(options[i-1]));
}

var dialLines = document.getElementsByClassName('diallines');
for (var i = 1; i < 60; i++) {
dialLines[i] = $(dialLines[i-1]).clone()
                                .insertAfter($(dialLines[i-1]));
$(dialLines[i]).css('transform', 'rotate(' + 6 * i + 'deg)');
}

function tick() {
var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();
var day = date.getDate();

var secAngle = seconds * 6;
var minAngle = minutes * 6 + seconds * (360/3600);
var hourAngle = hours * 30 + minutes * (360/720);

$('.sec-hand').css('transform', 'rotate(' + secAngle + 'deg)');
$('.min-hand').css('transform', 'rotate(' + minAngle + 'deg)');
$('.hour-hand').css('transform', 'rotate(' + hourAngle + 'deg)');
$('.date').text(day);
$('#timeLabel').text(date.toLocaleTimeString());
}

setInterval(tick, 100);

$('#inputTimeZone').on('input', function() {
    var selectedTimezone = $(this).val();

    $("#timezones").find("option").each(function() {
      if ($(this).val() == selectedTimezone) {
        console.log(selectedTimezone);
        var timestamp = new Date();        
        console.log(moment.tz(timestamp, selectedTimezone).format('YYYY-MM-DD HH:mm ZZ'))
      }
    })
});