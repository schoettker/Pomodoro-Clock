// function startTimer(duration, display) {
//   var timer = duration, minutes, seconds;
//   setInterval(function() {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ':' + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function() {
//   var fiveMinutes = 60 * 25,
//       display = document.querySelector('#timer');
//   startTimer(fiveMinutes, display);
// }
function getTimeRemaining(endtime) {
    var duration = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor( (duration/1000) % 60 ),
        minutes = Math.floor( (duration/1000/60) % 60 ),
        hours  = Math.floor( (duration/1000) / 60 / 60 );

    return {
      'total': duration,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
}

function initClock(id, endtime) {
  var clock = document.getElementById(id),
      interval = setInterval(function() {
      var time = getTimeRemaining(endtime);
      clock.innerHTML = 'hours: ' + time.hours + '<br>' +
                        'minutes: ' + time.minutes + '<br>' +
                        'seconds: ' + time.seconds;

      }, 1000);
}

function startSession(id) {
  var length = document.getElementById(id).innerText;
  length = length.replace(/\:/, '.');
  var currentTime = Date.parse(new Date());
  var deadline = new Date(currentTime + length*60*1000);
  initClock('timer', deadline); 
}
startSession('session-length');
