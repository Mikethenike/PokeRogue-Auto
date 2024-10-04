/*
CONSOLE COMMAND:
var script = document.createElement('script');
script.src = 'https://raw.githubusercontent.com/yourusername/my-repo/main/script.js'; // Replace with your actual URL
script.type = 'text/javascript';
script.onload = function() {
    randomizer();
};
script.onerror = function() {
    console.error('Error loading the script. Please check the URL.');
};
document.head.appendChild(script);
*/
var previous = 1;
console.log("PokeAuto running successfully");
function randomizer() {
    function up() {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', code: 'ArrowUp', charCode: 38, keyCode: 38, bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowUp', code: 'ArrowUp', charCode: 38, keyCode: 38, bubbles: true }));
    }
    function right() {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', code: 'ArrowRight', charCode: 39, keyCode: 39, bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight', code: 'ArrowRight', charCode: 39, keyCode: 39, bubbles: true }));
    }
    function down() {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13, bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13, bubbles: true }));
    }
    function left() {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', code: 'ArrowLeft', charCode: 37, keyCode: 37, bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft', code: 'ArrowLeft', charCode: 37, keyCode: 37, bubbles: true }));
    }
    function enter() {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13, bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', charCode: 13, keyCode: 13, bubbles: true }));
    }
    var button = Math.floor(Math.random() * 2) + 1;
    if (button == 1) {
        enter();
        previous = 1;
    } else if (button == 2) {
        if (previous == 1) {
            right();
        }
        enter();
        up();
        for (var i = 0; i < 5; i++) {
            up();
            enter();
        }
        previous = 2;
    }
}
