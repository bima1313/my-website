export class ImageData {
    imageSource: string;
    imageAlt: string;
    link: string;
    constructor(imageSource: string, imageAlt: string, link: string) {
        this.imageSource = imageSource;
        this.imageAlt = imageAlt;
        this.link = link;
    }
}