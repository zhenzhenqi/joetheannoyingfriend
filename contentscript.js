//////////// content script begins here ////////////////
function wtf() {
    alert('You wont look smarter.   -Joe the annoying friend');
}
var postForm = document.querySelector('div[aria-label="Create a post"]');
postForm.addEventListener('click', wtf);


function nis() {
    alert('Nothing is special.   -Joe the annoying friend');
}
var banner = document.querySelector('[role="banner"]');
banner.addEventListener('click', nis);


function randAlert() {
    var randtext = new Array();
    randtext[0] = "This is not real life, not real, not real, not real";
    randtext[1] = "Nobody is special";
    randtext[2] = "πø∆ˆ˙¶•∞®∞∞∞§§§§£™ß∂Ω≈Ω¡∑´†≈≈ç";
    randtext[3] = "Popularity contest never ends";
    randtext[4] = "Some people will always hate you";
    randtext[5] = "Stop trying to sound smart";
    randtext[6] = "You think you are cool don’t you";

    var i = Math.floor(7 * Math.random())
    alert(randtext[i] + '  ' + '-Joe the annoying friend');
}

var likeButtons = document.querySelector('.UFILikeLink');
// for (var i = likeButtons.length - 1; i >= 0; i--) {
    // likeButtons[i].addEventListener('click', randAlert);
// }
likeButtons.addEventListener('click', randAlert);

//
//
// addButton("Set an alarm", function () {
//     chrome.runtime.sendMessage({
//         setAlarm: true
//     });
// });
