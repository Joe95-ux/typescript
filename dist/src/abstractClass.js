"use strict";
// you can only create and object from a class inheriting and abstract class
class SnapPhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Twitter extends SnapPhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("sepia");
    }
}
const photo = new Twitter("snap", "snap");
