// https://stackoverflow.com/questions/8682085/can-i-sync-up-multiple-image-onload-calls/8682318#8682318
export class ImageLoader {

    constructor() { };

    // load will 'load' images by calling thingToDo for each item,
    // before calling allDone when all the things to do have been done.
    loader(images: ImageHolder[]): void {
        var count = images.length;

        // this callback counts down the things to do.
        // this is also just for show in the console.
        var countdown = function () {
            count--;
            if (0 == count) {
                console.log("done loading images")
            }
        };

        for (var i = 0; i < images.length; i++) {
            // loads each image and awaits callback.
            this.loadImage(images, i, countdown);
        }
    }

    loadImage(items: ImageHolder[], arrayElement: number, countdown: () => void): void {
        var onLoad = function (event: any) {
            event.target.removeEventListener("load", onLoad);

            // notify that we're done.
            countdown();
        }
        items[arrayElement].image.addEventListener("load", onLoad, false);
        items[arrayElement].image.src = items[arrayElement].src;
    }
}

// helperclass to bundle HtmlImageElement reference and source together.
export class ImageHolder {

    public image: HTMLImageElement;
    public src: string;

    constructor(image: HTMLImageElement, source: string){
        this.image = image;
        this.src = source;
    }

}