import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {
  title = "Eli App";
  nombre = 26;
  bool = true;
  obj = {
    cle: '12345'
  };
  hello: any;
  inputType = 'date';
  text: any;

  constructor() { 

  }

  ngOnInit(): void {
  }

    sayHello(){
      alert("Hello World")
    }

    showValue( event: any){
      this.text = event.target.value;
      
    }

}