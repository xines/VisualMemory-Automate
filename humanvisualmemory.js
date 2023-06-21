// https://humanbenchmark.com/tests/memory

var evt = document.createEvent('MouseEvents');
evt.initMouseEvent('mousedown', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

var StartBtn = document.querySelector("button:nth-child(1)");
var allWindows = document.getElementsByClassName("css-lxtdud eut2yre1");
var windowsActiveMemory = [];
var curActiveMemory;

function run() {
  // Start the memory challenge
  StartBtn.dispatchEvent(evt);

  setInterval(() => {
    checkAndClick();
    updateNewMemory();
    console.log('RUN ACTIVE');
  }, 600);
}

function checkAndClick() {
  if (windowsActiveMemory.length > 0) {
    for (var i = 0; i < windowsActiveMemory.length; i++) {
      windowsActiveMemory[i].dispatchEvent(evt);
    }
  }
}

function updateNewMemory() {
  curActiveMemory = document.getElementsByClassName("active css-lxtdud eut2yre1");
  windowsActiveMemory = Array.from(curActiveMemory);
}

run();