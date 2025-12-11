import {string} from "postcss-selector-parser";

export interface  IData  {
    tag: string,
    title: string,
    items: IItem[],
}

export interface IItem {
    text: string,
    image: string,
    title: string,
}


