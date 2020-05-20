// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    70: 'f',
    71: 'g',
    78: 'n',
    82: 'r'

};


var konamiCode = ['up', 'down', 'left', 'right', 'g', 'n', 'a', 'r', 'f'];


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
    window.open("https://www.facebook.com/groups/354882467934312/");

    var audio = new Audio('coconut.mp3');
    audio.play();
    
}