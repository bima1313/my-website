import { ImageData } from "../models/image-data";
import { Portfolio } from "../models/portfolio";

export const portfolioData: Portfolio[] = [
    new Portfolio(
        "chef claude",
        [
            "HTML",
            "CSS",
            "Javascript",
            "React"
        ],
        new ImageData(
            "google.com",
            "google",
            "https://google.com"
        ),
    )
]