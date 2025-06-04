import type { ImageData } from "./image-data";

export class TechStack {
    title: string;
    images: ImageData[];
    constructor(title: string, imageData: ImageData[]) {
        this.title = title;
        this.images = imageData;
    }
}