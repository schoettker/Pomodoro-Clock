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

function initClock(id, endtime, pause) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');


    function updateClock() {
      var time = getTimeRemaining(endtime);
      hoursSpan.innerHTML = time.hours + ':';
      minutesSpan.innerHTML =  ('0' + time.minutes).slice(-2) + ':';
      secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
      if (time.total <= 0) {
        clearInterval(interval);
        if (pause) {
          startSession('session-length', false);
        } else {
          startSession('pause-length', true);
        }
      }
    }

  updateClock();
  var interval = setInterval(updateClock, 1000);
  pauseSession('pause-length', interval);
}

function startSession(id, pause) {
  var length = document.getElementById(id).innerText;
  length = length.replace(/\:/, '.');
  var currentTime = Date.parse(new Date());
  // parses the time for an input in minutes 
  // use this later for production
  // var deadline = new Date(currentTime + length*60*1000);

  // this would parse seconds correctly (00:30 e.g for a half minute)
  // use this for testing
  var deadline = new Date(currentTime + (length*60*1000) / 0.60);
  initClock('timer', deadline, pause); 
}

function pauseSession(id, interval) {
  var toggle = 1;
  document.getElementById('pause').addEventListener('click', function(e) {
    toggle = 1 - toggle;
    if (toggle === 0) {
      clearInterval(interval);

    } else {
      startSession(id, true);
    }
  });
}
startSession('session-length');
