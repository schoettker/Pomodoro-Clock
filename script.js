// function getTimeRemaining(endtime) {
//     var duration = Date.parse(endtime) - Date.parse(new Date()),
//         seconds = Math.floor( (duration/1000) % 60 ),
//         minutes = Math.floor( (duration/1000/60) % 60 ),
//         hours  = Math.floor( (duration/1000) / 60 / 60 );

//     return {
//       'total': duration,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
// }

// function initClock(id, endtime, pause, toggle) {
//   var clock = document.getElementById(id);
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');


//     function updateClock() {
//       var time = getTimeRemaining(endtime);
//       hoursSpan.innerHTML = time.hours + ':';
//       minutesSpan.innerHTML =  ('0' + time.minutes).slice(-2) + ':';
//       secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);
//       if (time.total <= 0) {
//         clearInterval(interval);
//         }
//       }
//     }

// function startSession(id, pause, toggle) {
//   var length = document.getElementById(id).innerText;
//   length = length.replace(/\:/, '.');
//   var currentTime = Date.parse(new Date());
//   // parses the time for an input in minutes 
//   // use this later for production
//   // var deadline = new Date(currentTime + length*60*1000);

//   // this would parse seconds correctly (00:30 e.g for a half minute)
//   // use this for testing
//   var deadline = new Date(currentTime + (length*60*1000) / 0.60);
//   initClock('timer', deadline, pause, toggle); 
// }
var clock = new FlipClock($('.pomodoro'),{
  autoStart: false,
  clockFace: 'MinuteCounter',
  countdown: true
});
var elSessionLength = document.getElementById('session-length');

// clock.setTime(elSessionLength.innerText*60);
// clock.start();
function buttonsIncreaseAndDecreaseLengths() {
  function decrease(buttonId) {
    var element = document.getElementById(buttonId),
      length = element.parentElement.querySelector('.length');
    element.addEventListener('click', function(e) {
      length.innerText = Number(length.innerText) - 1;
    });
  }
  function increase(buttonId) {
    var element = document.getElementById(buttonId),
      length = element.parentElement.querySelector('.length');
    element.addEventListener('click', function(e) {
      length.innerText = Number(length.innerText) + 1;
    });
  }

  increase('inc-session');
  decrease('dec-session');
  increase('inc-pause');
  decrease('dec-pause');
}
buttonsIncreaseAndDecreaseLengths();
// // changeLengths('session-
// var but = document.getElementById('inc-session').parentElement;
// console.log(but.querySelector('.session-length'));
