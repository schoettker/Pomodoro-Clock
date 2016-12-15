var clock = new FlipClock($('.pomodoro'),{
  autoStart: false,
  clockFace: 'MinuteCounter',
  countdown: true
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
        clock.setTime(elSessionLength.innerText*60);
      }
    });
  }
  function increase(buttonId) {
    var element = document.getElementById(buttonId),
      length = element.parentElement.querySelector('.length');
    element.addEventListener('click', function(e) {
      length.innerText = Number(length.innerText) + 1;
      clock.setTime(elSessionLength.innerText*60);
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
  clock.start();
}
document.getElementById('stop')
.addEventListener('click', function(e) {
  stopTimer();
});
function stopTimer() {
  clock.stop();
}
document.getElementById('reset')
.addEventListener('click', function(e) {
  resetTimer();
});
function resetTimer() {
  clock.reset();
}
// // changeLengths('session-
// var but = document.getElementById('inc-session').parentElement;
// console.log(but.querySelector('.session-length'));
