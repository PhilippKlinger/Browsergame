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
        super();
        this.loadImages(this.IMAGES_HEALTHBAR);
        this.setPercentage(100);
        
        this.width = 200;
        this.height = 20;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTHBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 10;
        } else if (this.percentage > 90) {
            return 9;
        } else if (this.percentage > 80) {
            return 8;
        } else if (this.percentage > 70) {
            return 7;
        } else if (this.percentage > 60) {
            return 6;
        } else if (this.percentage > 50) {
            return 5;
        } else if (this.percentage > 40) {
            return 4;
        } else if (this.percentage > 30) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 10) {
            return 1;
        } else {
            return 0;
        }
    }
}




/**
 * updateHealthStatus(healthStatus) {
        // Berechnen Sie den Index des passenden Bildes basierend auf dem healthStatus
        let imageIndex = Math.floor(healthStatus / 10);
    
        // Stellen Sie sicher, dass der imageIndex innerhalb des Array-Bereichs bleibt
        if (imageIndex < 0) {
            imageIndex = 0;
        } else if (imageIndex >= this.IMAGES_HEALTHBAR.length) {
            imageIndex = this.IMAGES_HEALTHBAR.length - 1;
        }
    
        // Setzen Sie das Bild entsprechend des imageIndex
        let imagePath = this.IMAGES_HEALTHBAR[imageIndex];
        this.img = this.imageCache[imagePath];
    }
 */