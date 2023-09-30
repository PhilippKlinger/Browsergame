let canvas;
let world;
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
ambientSound = new Audio('./audio/rainforest_ambient.mp3');
menuSound = new Audio('audio/menuSoundFinal.mp3');
ambientSoundMuted = false;
menuSoundMuted = false;
effectSoundMuted = false;
mobileMode = false;

/**
 * Initializes the game elements.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    checkMobileMode();
}

/**
 * Starts the game, setting up initial game visuals and sounds.
 */
function startGame() {
    world.gameStarted = true;
    world.gamePaused = false;
    if (mobileMode) {
        document.getElementById('mobileControlsOverlay').style.display = 'flex';
    } else {
        document.getElementById('mobileControlsOverlay').style.display = 'none';
    }
    document.getElementById('soundImgAmbient').style.display = 'block';
    document.getElementById('startOverlay').style.display = 'none';
    document.querySelector('h1').classList.add('slide');
    setTimeout(() => document.querySelector('.optionsOverlay').style.top = '0', 650);
    playAmbientSound();
}

/**
 * Restarts the game.
 */
function restartGame() {
    window.location.reload();
}

/**
 * Displays the help overlay and handles associated audio states.
 */
function showHelp() {
    showHelpStyle();
    if (mobileMode) {
        document.getElementById('mobileControlsOverlay').style.display = 'none';
    }
    if (world.gameStarted && !ambientSoundMuted) {
        world.gamePaused = true;
        pauseAmbientSound();
    }
    if (!menuSoundMuted) {
        playMenuSound();
    }
}

/**
 * Sets styles to show the help overlay.
 */
function showHelpStyle() {
    document.querySelector('.helpOverlay').style.display = 'block';
    document.getElementById('fullscreenMode').classList.add('d-none');
    document.getElementById('helpImg').classList.add('d-none');
    document.getElementById('returnImg').classList.remove('d-none');
    document.getElementById('startOverlay').style.display = 'none';
    document.getElementById('soundImgMenu').style.display = 'block';
}

/**
 * Hides the help overlay and handles audio states.
 */
function hideHelp() {
    hideHelpStyle();
    if (mobileMode) { document.getElementById('mobileControlsOverlay').style.display = 'flex'; }
    if (!world.gameStarted) { document.getElementById('startOverlay').style.display = 'flex'; }
    if (world.gamePaused) { world.gamePaused = false; }
    if (!menuSoundMuted) { pauseMenuSound(); }
    if (ambientSoundMuted) { playAmbientSound(); }
    else { pauseAmbientSound(); }
}

/**
 * Sets styles to hide the help overlay.
 */
function hideHelpStyle() {
    document.querySelector('.helpOverlay').style.display = 'none';
    document.getElementById('fullscreenMode').classList.remove('d-none');
    document.getElementById('helpImg').classList.remove('d-none');
    document.getElementById('returnImg').classList.add('d-none');
    document.getElementById('soundImgMenu').style.display = 'none';
}

/**
 * Toggles the game's fullscreen mode.
 */
function toggleFullscreen() {
    let elem = document.getElementById('canvasSection');
    document.getElementById('fullscreenImg').style.display = 'block';
    document.getElementById('normalscreenImg').style.display = 'none';
    if (!document.fullscreenElement) {
        openFullscreen(elem);
    } else {
        closeFullscreen();
    }
}

/**
 * Enables fullscreen mode.
 * @param {Element} elem - The element to display in fullscreen.
 */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    document.getElementById('canvas').style.width = '100%';
    document.getElementById('canvas').style.height = '100%';
    document.getElementById('fullscreenImg').style.display = 'none';
    document.getElementById('normalscreenImg').style.display = 'block';
}

/**
 * Exits fullscreen mode.
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

/**
 * Toggles the ambient sound on/off.
 */
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

/**
 * Toggles the menu sound on/off.
 */
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

/**
 * Plays the ambient sound.
 */
function playAmbientSound() {
    ambientSound.play();
    playEffectSound();
    ambientSoundMuted = false;
}

/**
 * Pauses the ambient sound.
 */
function pauseAmbientSound() {
    ambientSound.pause();
    pauseEffectSound();
    ambientSoundMuted = true;
}

/**
 * Plays the menu sound.
 */
function playMenuSound() {
    menuSound.play();
    menuSoundMuted = false;
}

/**
 * Pauses the menu sound.
 */
function pauseMenuSound() {
    menuSound.pause();
    menuSoundMuted = true;
}

/**
 * Plays all the effect sounds.
 */
function playEffectSound() {
    playEffectSoundCharacter();
    playEffectSoundWorld();
}

/**
 * Pauses all the effect sounds.
 */
function pauseEffectSound() {
    pauseEffectSoundCharacter();
    pauseEffectSoundWorld();
}

/**
 * Plays the character's effect sounds.
 */
function playEffectSoundCharacter() {
    // ... implementation ...
}

/**
 * Pauses the character's effect sounds.
 */
function pauseEffectSoundCharacter() {
    // ... implementation ...
}

/**
 * Plays the world's effect sounds.
 */
function playEffectSoundWorld() {
    // ... implementation ...
}

/**
 * Pauses the world's effect sounds.
 */
function pauseEffectSoundWorld() {
    // ... implementation ...
}

/**
 * Checks if the game should be in mobile mode or not.
 */
function checkMobileMode() {
    if (window.innerWidth <= 800 || isMobile) {
        mobileMode = true;
    } else {
        mobileMode = false;
    }
    if (mobileMode) {
        document.getElementById('mobileControlsOverlay').style.display = 'flex';
    } else {
        document.getElementById('mobileControlsOverlay').style.display = 'none';
    }
}

// Event listener for checking mobile mode on window resize.
window.addEventListener('resize', checkMobileMode);

// Continuously checks if the game should be in mobile mode every second.
setInterval(checkMobileMode, 1000);