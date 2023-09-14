let canvas;
let world;
let keyboard = new Keyboard();

ambientSound = new Audio('./audio/rainforest_ambient.mp3');
menuSound = new Audio('audio/menuSoundFinal.mp3');
isPlaying = true;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setTimeout(() => {
        menuSound.play();
    }, 1000);
    
}

function startGame() {
    const headline = document.querySelector('h1');
    const optionsOverlay = document.querySelector('.optionsOverlay');
    document.getElementById('startOverlay').style.display = 'none';
    headline.classList.add('slide');
    setTimeout(() => {
        optionsOverlay.style.top = '0';
    }, 650);
    ambientSound.play();
    menuSound.pause();
}

function toggleAmbientSound() {
    let soundImg = document.getElementById('soundImg');
    if(isPlaying) {
        ambientSound.pause();
        soundImg.src = './img/10_gui/options_overlay/sound.png';
        isPlaying = false;
    } else if (!isPlaying){
        ambientSound.play();
        soundImg.src = './img/10_gui/options_overlay/sound_off.png';
        isPlaying = true;
    }
   
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