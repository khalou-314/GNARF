// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    73: 'i',
    69: 'e',
    71: 'g',
    78: 'n'
};


var konamiCode = ['up', 'down', 'left', 'right', 'i', 'n', 'g', 'e'];


var konamiCodePosition = 0;


document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];

    var requiredKey = konamiCode[konamiCodePosition];


    if (key == requiredKey) {


        konamiCodePosition++;


        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    window.location.href="deer.html";


}