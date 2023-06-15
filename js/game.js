let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    
}


window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        keyboard.ARROWLEFT = true;
    }

    if (event.key === 'ArrowRight') {
        keyboard.ARROWRIGHT = true;
    }

    if (event.key === 'ArrowUp') {
        keyboard.ARROWUP = true;
    }

    if (event.key === 'ArrowDown') {
        keyboard.ARROWDOWN = true;
    }

    if (event.key === '') {
        keyboard.SPACE = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        keyboard.ARROWLEFT = false;
    }

    if (event.key === 'ArrowRight') {
        keyboard.ARROWRIGHT = false;
    }

    if (event.key === 'ArrowUp') {
        keyboard.ARROWUP = false;
    }

    if (event.key === 'ArrowDown') {
        keyboard.ARROWDOWN = false;
    }

    if (event.key === '') {
        keyboard.SPACE = false;
    }
});



/**
 * let keyPress = event.code.toUpperCase();
    let keyStatus = keyboard[keyPress];
    console.log(keyPress);
    console.log(keyStatus);
    if (keyboard.hasOwnProperty(keyPress)) {
        keyStatus = true;
    }
        
    console.log(keyStatus);
 */