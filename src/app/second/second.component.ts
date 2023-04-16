import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent 
{
  public str="";
  public str1="";

  public Event()
  {
    return this.str="MARVELLOUS INFOYSTEM";
  }

  public Myevent()
  {
    return this.str1="marvellous infosytem";
  }

}
