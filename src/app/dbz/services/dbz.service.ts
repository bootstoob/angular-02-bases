import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters:Character[]=[{
        id:uuid(),
        name:'krillin',
        power:500
    },{
        id:uuid(),
        name:'goku',
        power:5000
    },{
        id:uuid(),
        name:'bejeta',
        power:4000
    }]

    addCharacter( character:Character ):void {
        console.log('MAIN-onNewCharacter:'+character.id);
        const newCharacter: Character = { id: uuid(), ...character };
        this.characters.unshift(character);
    }
    /*
    onDeleteCharacter(index: number):void{
        console.log('MAIN-onDeleteCharcter:'+index);
        this.characters.splice(index, 1);
    }
    */
    deleteCharacterById( id:string ) {
        this.characters = this.characters.filter( character => character.id !== id );
    }
    
}