let canvas;
let world;
let keyboard = new Keyboard();

ambientSound = new Audio('./audio/rainforest_ambient.mp3');
menuSound = new Audio('audio/menuSoundFinal.mp3');
ambientSoundMuted = false;
menuSoundMuted = false;
effectSoundMuted = false;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
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
    playAmbientSound();
}

function restartGame() {
    window.location.reload();
}

function showHelp() {
    document.querySelector('.helpOverlay').style.display = 'block';
    document.getElementById('fullscreenMode').classList.add('d-none');
    document.getElementById('helpImg').classList.add('d-none');
    document.getElementById('returnImg').classList.remove('d-none');
    document.getElementById('startOverlay').style.display = 'none';
    document.getElementById('soundImgMenu').style.display = 'block';
    if (world.gameStarted) {
        world.gamePaused = true;
        pauseAmbientSound();
    }
    if (!menuSoundMuted) {
        playMenuSound();
    }
}

function hideHelp() {
    document.querySelector('.helpOverlay').style.display = 'none';
    document.getElementById('fullscreenMode').classList.remove('d-none');
    document.getElementById('helpImg').classList.remove('d-none');
    document.getElementById('returnImg').classList.add('d-none');
    document.getElementById('soundImgMenu').style.display = 'none';
    if (!world.gameStarted) {
        document.getElementById('startOverlay').style.display = 'flex';
    } else { playAmbientSound(); }
    if (world.gamePaused) {
        world.gamePaused = false;
    }
    if (!menuSoundMuted) {
        pauseMenuSound();
    }
}

function toggleFullscreen() {
    let elem = document.getElementById('canvasSection');
    document.getElementById('fullscreenImg').style.display = 'block';
    document.getElementById('normalscreenImg').style.display = 'none';
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        document.getElementById('canvas').style.width = '100%';
        document.getElementById('canvas').style.height = '100%';
        document.getElementById('fullscreenImg').style.display = 'none';
        document.getElementById('normalscreenImg').style.display = 'block';
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
    let soundImgAmbient = document.getElementById('soundImgAmbient');
    if (!ambientSoundMuted) {
        pauseAmbientSound();
        soundImgAmbient.src = './img/10_gui/options_overlay/sound.png';
    } else if (ambientSoundMuted) {
        playAmbientSound();
        soundImgAmbient.src = './img/10_gui/options_overlay/sound_off.png';
    }
}

function toggleMenuSound() {
    let soundImgMenu = document.getElementById('soundImgMenu');
    if (!menuSoundMuted) {
        pauseMenuSound();
        soundImgMenu.src = './img/10_gui/options_overlay/sound.png';
    } else if (menuSoundMuted) {
        playMenuSound();
        soundImgMenu.src = './img/10_gui/options_overlay/sound_off.png';
    }
}



function playAmbientSound() {
    ambientSound.play();
    ambientSoundMuted = false;
}

function pauseAmbientSound() {
    ambientSound.pause();
    ambientSoundMuted = true;
}

function playMenuSound() {
    menuSound.play();
    menuSoundMuted = false;
}

function pauseMenuSound() {
    menuSound.pause();
    menuSoundMuted = true;
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

        if (event.key === 'ArrowDown') {
            keyboard.ARROWDOWN = true;
            keyboard.NOKEY = false;
        }

        if (event.key === " ") {
            keyboard.SPACE = true;
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

        if (event.key === 'ArrowDown') {
            keyboard.ARROWDOWN = false;
            keyboard.NOKEY = true;
        }

        if (event.key === " ") {
            keyboard.SPACE = false;
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