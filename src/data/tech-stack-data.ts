import htmlSvg from "/src/assets/languages&frameworks/html5.svg";
import cssSvg from "/src/assets/languages&frameworks/css.svg";
import javascriptSvg from "/src/assets/languages&frameworks/javascript.svg";
import typescriptSvg from "/src/assets/languages&frameworks/typescript.svg";
import reactSvg from "/src/assets/languages&frameworks/react.svg";
import tailwindCssSvg from "/src/assets/languages&frameworks/tailwindcss.svg";
import dartSvg from "/src/assets/languages&frameworks/dart.svg";
import flutterSvg from "/src/assets/languages&frameworks/flutter.svg";
import mongoDbSvg from "/src/assets/databases&baas/mongodb.svg";
import sqliteSvg from "/src/assets/databases&baas/sql-lite.svg";
import firebaseSvg from "/src/assets/databases&baas/firebase.svg";
import vsCodeSvg from "/src/assets/tools/vscode.svg";
import androidStudioSvg from "/src/assets/tools/android-studio.svg";

import { TechStack } from "../models/tech-stack";
import { ImageData } from "../models/image-data";

export const techStackData: TechStack[] = [
  new TechStack("Programming Languanges & Frameworks", [
    new ImageData(htmlSvg, "HTML Image", "https://developer.mozilla.org/en-US/docs/Web/HTML"),
    new ImageData(cssSvg, "CSS Image", "https://developer.mozilla.org/en-US/docs/Web/CSS"),
    new ImageData(javascriptSvg, "Javascript Image", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
    new ImageData(typescriptSvg, "Typescript Image", "https://www.typescriptlang.org/"),
    new ImageData(reactSvg, "React Image","https://react.dev/"),
    new ImageData(tailwindCssSvg, "TailwindCSS Image","https://tailwindcss.com/"),
    new ImageData(dartSvg, "Dart Image", "https://dart.dev/"),
    new ImageData(flutterSvg, "Flutter Image", "https://flutter.dev/"),
  ]),
  new TechStack("Databases & Backend as a Service (BaaS)", [
    new ImageData(mongoDbSvg, "MongoDB Image", "https://www.mongodb.com/"),
    new ImageData(sqliteSvg, "Sqlite Image", "https://www.sqlite.org/"),
    new ImageData(firebaseSvg, "Firebase Image", "https://firebase.google.com/"),
  ]),
  new TechStack("tools", [
    new ImageData(vsCodeSvg, "Visual Studio Code Image", "https://code.visualstudio.com/"),
    new ImageData(androidStudioSvg, "Android Studio Image", "https://developer.android.com/studio?gclsrc=aw.ds&gad_source=1&gad_campaignid=21831783564&hl=id"),
  ]),
];
