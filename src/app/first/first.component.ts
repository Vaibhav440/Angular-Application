import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent 
{

  public str="";
  public str1="";
  public fun()
  {
    return "Marvellous Infoystem";
  }

  public Event()
  {
    return this.str="Educating for Better tomorrow";
  }

  public MyEvent()
  {
    console.log("Marvellous Infosytem");
  }

  public Marvellous(value:any)
  {
     console.log(value)
  }



  

}
