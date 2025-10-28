
import { gameObject } from "../model/animals.model";

const listAnimals: gameObject[] = [
    {nom: "éléphant", imageLink: "./images/elephant.png", soundLink: "./sounds/elephant.mp3", select: false},
    {nom: "souris"  , imageLink: "./images/souris.png"  , soundLink: "./sounds/souris.mp3"  , select: false},
    {nom: "chat"    , imageLink: "./images/chat.png"    , soundLink: "./sounds/chat.mp3"    , select: false},
    {nom: "chien"   , imageLink: "./images/chien.png"   , soundLink: "./sounds/chien.mp3"   , select: false},
    {nom: "cheval"  , imageLink: "./images/cheval.png"  , soundLink: "./sounds/cheval.mp3"  , select: false},
    {nom: "vache"   , imageLink: "./images/vache.png"   , soundLink: "./sounds/vache.mp3"   , select: false},
    {nom: "mouton"  , imageLink: "./images/mouton.png"  , soundLink: "./sounds/mouton.mp3"  , select: false},
    {nom: "chèvre"  , imageLink: "./images/chevre.png"  , soundLink: "./sounds/chevre.mp3"  , select: false},
    {nom: "poule"   , imageLink: "./images/poule.png"   , soundLink: "./sounds/poule.mp3"   , select: false},
]


export class animalsService {
    static isInList(object: gameObject, list: gameObject[]): boolean {
        
        for(let i = 0; i < list.length; i++){
            if(object.nom == list[i].nom){
                return true;
            }
        }

        return false;
    }

    static getHazardAnimals(): gameObject[] {
        for (let i = 0; i < listAnimals.length; i++){
            listAnimals[i].select = false
        }

        let treeAnimals: gameObject[] = []
        let numberSelected = 0;

        for (let i = 0; i < 3; i++) {
            let id = Math.floor(Math.random() * listAnimals.length);
            
            if(!this.isInList(listAnimals[id], treeAnimals)){
                treeAnimals.push(listAnimals[id]);
            }else{
                i--
            }
            
        }

        numberSelected = Math.floor(Math.random() * (treeAnimals.length));
        console.log(numberSelected)
        treeAnimals[numberSelected].select = true;

        return treeAnimals;
    }

    static getElephant(): any {
        return listAnimals[0];
    }
}