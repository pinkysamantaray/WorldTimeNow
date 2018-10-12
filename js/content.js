// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log(message.txt);
    
//     let paragraphs = document.getElementsByTagName('p');
//     for(p of paragraphs){
//         p.style['background-color'] = '#00ff00';
//     }
// });

console.log(window);
console.log(chrome);

$(document).ready(function() {
    
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

    function tick(dtFormat) {
        var date = dtFormat ? dtFormat : moment();
        var seconds = date.seconds();
        var minutes = date.minutes();
        var hours = date.hours();
        var day = date.date();

        var secAngle = seconds * 6;
        var minAngle = minutes * 6 + seconds * (360/3600);
        var hourAngle = hours * 30 + minutes * (360/720);

        $('.sec-hand').css('transform', 'rotate(' + secAngle + 'deg)');
        $('.min-hand').css('transform', 'rotate(' + minAngle + 'deg)');
        $('.hour-hand').css('transform', 'rotate(' + hourAngle + 'deg)');
        $('.date').text(day);
        $('#timeLabel').text(date.format('DD/MMM/YYYY - HH:mm A'));
    }

    var timer;
    timer = setInterval(tick, 100);

    $('#inputTimeZone').on('input', function() {
        var selectedTimezone = $(this).val();

        $("#timezones").find("option").each(function() {
        if ($(this).val() == selectedTimezone) {
            console.log(selectedTimezone);
            var timestamp = new Date();  
            var newTime = moment.tz(timestamp, selectedTimezone);
            console.log(newTime.format('YYYY-MM-DD HH:mm ZZ'));
            clearInterval(timer);
            timer = 0;
            timer = setInterval(tick(newTime), 100);
        }
        })
    });

});