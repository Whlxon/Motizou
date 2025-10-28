import { gameObject } from "../model/objets.model";

const listAnimals: gameObject[] = [
    {nom: "avion", imageLink: "./images/objets/avion.png", soundLink: "./sounds/objets/avion.mp3", select: false},
]


export class objetService {
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
}