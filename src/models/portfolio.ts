import type { ImageData } from "./image-data";

export class Portfolio {
    title: string;
    categories: string[];
    image: ImageData;    
    constructor(title:string,  categories: string[], image: ImageData) {
        this.title = title;
        this.categories = categories;
        this.image = image;
    }
}