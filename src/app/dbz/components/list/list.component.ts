import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
      name:'trunk',
      power:10,
  }];
  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();
  onDeleteCharacter(id?:string):void{
    if ( !id ) return;
    console.log('list-index - id:'+id);
    this.onDelete.emit(id);
    
  }
}