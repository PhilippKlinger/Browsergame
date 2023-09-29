let canvas;
let world;
let keyboard = new Keyboard();

ambientSound = new Audio('./audio/rainforest_ambient.mp3');
menuSound = new Audio('audio/menuSoundFinal.mp3');
isPlaying = true;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    window.open('./toDo.html');
}

function startGame() {
    world.gameStarted = true;
    world.gamePaused = false;
    let headline = document.querySelector('h1');
    let optionsOverlay = document.querySelector('.optionsOverlay');
    document.getElementById('startOverlay').style.display = 'none';
    headline.classList.add('slide');
    setTimeout(() => {
        optionsOverlay.style.top = '0';
    }, 650);
    ambientSound.play();
}

function restartGame() {
    window.location.reload();
}

function showHelp() {
    let helpOverlay = document.querySelector('.helpOverlay');
    let fullscreenImg = document.getElementById('fullscreenImg');
    let soundImg = document.getElementById('soundImg');
    let helpImg = document.getElementById('helpImg');
    let returnBtn = document.getElementById('returnImg');
    fullscreenImg.classList.add('d-none');
    soundImg.classList.add('d-none');
    helpImg.classList.add('d-none');
    returnBtn.classList.remove('d-none');
    helpOverlay.style.display = 'block';
    document.getElementById('startOverlay').style.display = 'none';
    if (world.gameStarted) {
        world.gamePaused = true;
        ambientSound.pause();
    }
    menuSound.play();
}

function hideHelp() {
    let helpOverlay = document.querySelector('.helpOverlay');
    let fullscreenImg = document.getElementById('fullscreenImg');
    let soundImg = document.getElementById('soundImg');
    let helpImg = document.getElementById('helpImg');
    let returnBtn = document.getElementById('returnImg');
    fullscreenImg.classList.remove('d-none');
    soundImg.classList.remove('d-none');
    helpImg.classList.remove('d-none');
    returnBtn.classList.add('d-none');
    helpOverlay.style.display = 'none';
    if (!world.gameStarted) {
        document.getElementById('startOverlay').style.display = 'flex';
    }
    if(world.gamePaused) {
        world.gamePaused = false;
    }
    if(world.gameStarted) {
        ambientSound.play();
    }
    menuSound.pause();  
}

function toggleFullscreen() { 
    let elem = document.getElementById('canvasSection');
    let canvas = document.getElementById('canvas');
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        canvas.style.width = '100%';
        canvas.style.height = '100%';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
}

function toggleAmbientSound() {
    let soundImg = document.getElementById('soundImg');
    if(isPlaying && world.gameStarted) {
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

    // if (event.key === 'ArrowDown') {
    //     keyboard.ARROWDOWN = true;
    //      keyboard.NOKEY = false;
    // }

    if (event.key === " ") {
        keyboard.SPACE = true;
         keyboard.NOKEY = false;
    }

    // if (event.key === "w") {
    //     keyboard.W = true;
    //      keyboard.NOKEY = false;
    // }

    // if (event.key === "a") {
    //     keyboard.A = true;
    //      keyboard.NOKEY = false;
    // }

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

    // if (event.key === 'ArrowDown') {
    //     keyboard.ARROWDOWN = false;
    //      keyboard.NOKEY = true;
    // }

    if (event.key === " ") {
        keyboard.SPACE = false;
         keyboard.NOKEY = true;
    }

    // if (event.key === "w") {
    //     keyboard.W = false;
    //      keyboard.NOKEY = true;
    // }

    // if (event.key === "a") {
    //     keyboard.A = false;
    //      keyboard.NOKEY = true;
    // }

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