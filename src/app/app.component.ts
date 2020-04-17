import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
 
  _color: string = 'black';
 styleObj= {color : this._color};



  setColor(num : number){
    console.log('hello ' + num);
    switch(num){
      case 1:
          this._color =this.styleObj.color= 'red';
        break;
      case 2:
          this._color =this.styleObj.color= 'blue';
        break;
      case 3:
          this._color =this.styleObj.color= 'green';
        break;
      default:
        break;
    } 
  }
}
