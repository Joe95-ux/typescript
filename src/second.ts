// Interface are protocols whcih we can follow

interface TakePhoto{
    cameraMode: string
    filter: string
    burst: string
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string,
    ){}
}

interface Shorts{
    createStory(): void
}

class Youtube implements TakePhoto, Shorts{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: string,
    ){}

    createStory(): void {
        console.log("stories")
    }
}