class Statusbar extends DrawableObject {

    IMAGES_HEALTHBAR = [
        './img/10_gui/load_bar/health/bar_0.svg',
        './img/10_gui/load_bar/health/bar_10.svg',
        './img/10_gui/load_bar/health/bar_20.svg',
        './img/10_gui/load_bar/health/bar_30.svg',
        './img/10_gui/load_bar/health/bar_40.svg',
        './img/10_gui/load_bar/health/bar_50.svg',
        './img/10_gui/load_bar/health/bar_60.svg',
        './img/10_gui/load_bar/health/bar_70.svg',
        './img/10_gui/load_bar/health/bar_80.svg',
        './img/10_gui/load_bar/health/bar_90.svg',
        './img/10_gui/load_bar/health/bar_100.svg'
    ];

    percentage = 100;

    constructor() {
        this.loadImages(this.IMAGES_HEALTHBAR);
    }

    setPercentage(percentage) {
        this.percentage = percentage;

        if() {
            
        }
    }
}