
function log(msg) {
  console.log('Reddit Robin Autogrow: ' + msg);
}

function warn(msg) {
  console.warn('Reddit Robin Autogrow: ' + msg);
}

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    if (document.getElementById('robinChat')) {
      log('RobinChat detected');
      var buttons = document.getElementById('robinVoteWidget');
      var btn_grow = buttons.getElementsByClassName('robin-chat--vote-increase')[0];

      if (!btn_grow.classList.contains('robin--active')) {
        log('Grow button not clicked, clicking it now!');
        btn_grow.click();
      } else {
        log('Grow button already clicked!');
      }
    } else {
      warn('Robin chat not found!');
    }

  }
}, 10);
