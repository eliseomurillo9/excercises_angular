import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  // Exercise 1
  colorB: any;

  // Exercise 2
  showHello: boolean = false;
  message: any = "Apparition";

  // Exercise 3

  constructor() { }

  ngOnInit(): void {
  }
  // Exercise 1
  captureColor(event: any) {
    this.colorB = event.target.value;
    console.log(this.colorB);
  }

  // Exercise 2
  showMessage() {
    this.showHello = !this.showHello;

    if (this.showHello) {
      this.message = "Disparition"
    } else {
      this.message = "Apparition"
    }
  }

  // Excercise 3
  users: any[] = [
    {
      firstName: 'Jean',
      lastName: 'Bon'
    },
    {
      firstName: 'John',
      lastName: 'Doe'
    }
  ]
}
