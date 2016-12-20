var clock = new FlipClock($('.pomodoro'),{
  autoStart: false,
  clockFace: 'MinuteCounter',
  countdown: true,
  isRunning: false,
  paused: false,
  break: false,
  session: true
});
var elSessionLength = document.getElementById('session-length');

clock.setTime(elSessionLength.innerText*60);
function buttonsIncreaseAndDecreaseLengths() {
  function decrease(buttonId) {
    var element = document.getElementById(buttonId),
      length = element.parentElement.querySelector('.length');
    element.addEventListener('click', function(e) {
      if (length.innerText > 1) {
        length.innerText = Number(length.innerText) - 1;
        if (!clock.isRunning && !clock.paused) {
          clock.setTime(elSessionLength.innerText*60);
        }
      }
    });
  }
  function increase(buttonId) {
    var element = document.getElementById(buttonId),
      length = element.parentElement.querySelector('.length');
    element.addEventListener('click', function(e) {
      length.innerText = Number(length.innerText) + 1;
      if (!clock.isRunning && !clock.paused) {
        clock.setTime(elSessionLength.innerText*60);
      }
    });
  }

  increase('inc-session');
  decrease('dec-session');
  increase('inc-pause');
  decrease('dec-pause');
}
buttonsIncreaseAndDecreaseLengths();
document.getElementById('start')
.addEventListener('click', function(e) {
  startTimer();
});
function startTimer() {
  clock.start(function() {
    checkFinished(clock.time.time);
  });
  clock.isRunning = true;
}
document.getElementById('stop')
.addEventListener('click', function(e) {
  stopTimer();
  clock.isRunning = false;
  clock.paused = true;
});
function stopTimer() {
  clock.stop();
}
document.getElementById('reset')
.addEventListener('click', function(e) {
  resetTimer();
});
function resetTimer() {
  clock.stop();
  clock.paused = false;
  clock.isRunning = false;
  clock.setTime(document.getElementById('session-length').innerText*60);
}

function checkFinished(timeLeft) {
  if (timeLeft == 0 && !clock.running) {
    if (clock.session) {
      console.log('Time for a break :)');
      clock.setTime(document.getElementById('pause-length').innerText*60);
      startTimer()
    } else if (clock.break) {
      console.log('Now get some work done!');
      clock.setTime(document.getElementById('session-length').innerText*60);
      startTimer();
    }
    var temp = clock.session;
    clock.session = clock.break;
    clock.break = temp;
  }
}
