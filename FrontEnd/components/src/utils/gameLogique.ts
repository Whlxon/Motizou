import type { gameObject } from "../model/words";

import { listAnimals, listNourritures, listObjets, listTransports, listVetements} from '../pages/DB/db';

const types = [listAnimals, listObjets, listNourritures, listTransports, listVetements];
let type: number = 0;

export class gameService {

    static isInList(object: gameObject, list: gameObject[]): boolean {
        
        for(let i = 0; i < list.length; i++){
            if(object.nom == list[i].nom){
                return true;
            }
        }

        return false;
    }

    static getHazardTypes(): gameObject[] {
        let list = types[type]

        for (let i = 0; i < list.length; i++){
            list[i].select = false
        }

        let treeAnimals: gameObject[] = []
        let numberSelected = 0;

        for (let i = 0; i < 3; i++) {
            let id = Math.floor(Math.random() * list.length);
            
            if(!this.isInList(list[id], treeAnimals)){
                treeAnimals.push(list[id]);
            }else{
                i--
            }
            
        }

        numberSelected = Math.floor(Math.random() * (treeAnimals.length));
        console.log(numberSelected)
        treeAnimals[numberSelected].select = true;

        return treeAnimals;
    }

    static setType(n: number){
        type = n;
    }
}