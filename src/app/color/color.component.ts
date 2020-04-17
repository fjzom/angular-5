import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent   {

_colorPadre: string;
styleObj= {color : 'black'};

@Input() set changeColor(colorPadre: string){
  console.log('Hijo ' + colorPadre); 
  this._colorPadre = colorPadre;
} 
  paintColor(){  
    this.styleObj=  {color : this._colorPadre};
  }
}
 