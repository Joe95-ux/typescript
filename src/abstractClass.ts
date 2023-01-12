// you can only create and object from a class inheriting and abstract class


abstract class SnapPhoto{
    constructor(public cameraMode:string, public filter: string){}
    abstract getSepia():void
}


class Twitter extends SnapPhoto{
    constructor(public cameraMode:string, public filter: string){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia")
    }
}

const photo = new Twitter("snap", "snap");