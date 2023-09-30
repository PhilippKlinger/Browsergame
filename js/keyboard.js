let keyboard = new Keyboard();

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
    }
});

function mobileBtnLeft() {
    document.getElementById('mobileBtnLeft').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.ARROWLEFT = true;
        keyboard.NOKEY = false;
    });
    document.getElementById('mobileBtnLeft').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.ARROWLEFT = false;
        keyboard.NOKEY = true;
    });
}

function mobileBtnRight() {
    document.getElementById('mobileBtnRight').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.ARROWRIGHT = true;
        keyboard.NOKEY = false;
    });
    document.getElementById('mobileBtnRight').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.ARROWRIGHT = false;
        keyboard.NOKEY = true;
    });
}

function mobileBtnJump() {
    document.getElementById('mobileBtnJump').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.SPACE = true;
        keyboard.NOKEY = false;
    });
    document.getElementById('mobileBtnJump').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.SPACE = false;
        keyboard.NOKEY = true;
    });
}

function mobileBtnAttack() {
    document.getElementById('mobileBtnAttack').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.ARROWDOWN = true;
        keyboard.NOKEY = false;
    });
    document.getElementById('mobileBtnAttack').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.ARROWDOWN = false;
        keyboard.NOKEY = true;
    });
}

function mobileBtnThrow() {
    document.getElementById('mobileBtnThrow').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.D = true;
        keyboard.NOKEY = false;
    });
    document.getElementById('mobileBtnThrow').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.D = false;
        keyboard.NOKEY = true;
    });
}

function mobileBtnSlide() {
    document.getElementById('mobileBtnSlide').addEventListener('touchstart', (event) => {
        event.preventDefault();
        keyboard.S = true;
        keyboard.NOKEY = false;
    });
    document.getElementById('mobileBtnSlide').addEventListener('touchend', (event) => {
        event.preventDefault();
        keyboard.S = false;
        keyboard.NOKEY = true;
    });
}
