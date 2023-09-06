let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);    
}

function startGame() {
    
}


window.addEventListener('keydown', (event) => {
    if (!keyboard.isLocked) {
    if (event.key === 'ArrowLeft') {
        keyboard.ARROWLEFT = true;
        keyboard.NOKEY = false;
    }

    if (event.key === 'ArrowRight') {
        keyboard.ARROWRIGHT = true;
        keyboard.NOKEY = false;
    }

    if (event.key === 'ArrowUp') {
        keyboard.ARROWUP = true;
        keyboard.NOKEY = false;
    }

    if (event.key === 'ArrowDown') {
        keyboard.ARROWDOWN = true;
         keyboard.NOKEY = false;
    }

    if (event.key === " ") {
        keyboard.SPACE = true;
         keyboard.NOKEY = false;
    }

    if (event.key === "w") {
        keyboard.W = true;
         keyboard.NOKEY = false;
    }

    if (event.key === "a") {
        keyboard.A = true;
         keyboard.NOKEY = false;
    }

    if (event.key === "s") {
        keyboard.S = true;
         keyboard.NOKEY = false;
    }

    if (event.key === "d") {
        keyboard.D = true;
         keyboard.NOKEY = false;
    }

    if (event.key === "h") {
        keyboard.H = true;
         keyboard.NOKEY = false;
    }
}
});

window.addEventListener('keyup', (event) => {
    if (!keyboard.isLocked) {
    if (event.key === 'ArrowLeft') {
        keyboard.ARROWLEFT = false;
        keyboard.NOKEY = true;
    }

    if (event.key === 'ArrowRight') {
        keyboard.ARROWRIGHT = false;
         keyboard.NOKEY = true;
    }

    if (event.key === 'ArrowUp') {
        keyboard.ARROWUP = false;
         keyboard.NOKEY = true;
    }

    if (event.key === 'ArrowDown') {
        keyboard.ARROWDOWN = false;
         keyboard.NOKEY = true;
    }

    if (event.key === " ") {
        keyboard.SPACE = false;
         keyboard.NOKEY = true;
    }

    if (event.key === "w") {
        keyboard.W = false;
         keyboard.NOKEY = true;
    }

    if (event.key === "a") {
        keyboard.A = false;
         keyboard.NOKEY = true;
    }

    if (event.key === "s") {
        keyboard.S = false;
         keyboard.NOKEY = true;
    }

    if (event.key === "d") {
        keyboard.D = false;
         keyboard.NOKEY = true;
    }

    if (event.key === "h") {
        keyboard.H = false;
         keyboard.NOKEY = true;
    }
}
});