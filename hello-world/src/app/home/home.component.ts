import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../interfaces/person.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blueTitle = 'Hola desde <app-blue> 💙';
  greenTitle = 'Hola desde <app-green> 💚';
  redTitle = 'Hola desde <app-red> 🧡';

  blueClicks = 0;
  greenClicks = 0;
  redClicks = 0;

  message = 'Esto es un mensaje!!';
  people: Person[] = [];

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.people;
  }

  ngOnInit(): void {
    // this.recursivePrint(1000);
  }

  onGreenClicks(clicks: number) {
    this.greenClicks = clicks;
  }

  onBlueClick(clicks: number) {
    this.blueClicks = clicks;
  }

  reset() {
    this.blueClicks = 0;
    this.greenClicks = 0;
    this.redClicks = 0;
    this.blueTitle = 'Hola desde <app-blue>' + Math.floor(Math.random() * 101);
    this.greenTitle = 'Hola desde <app-green> 💚 1';
    this.redTitle = 'Hola desde <app-red>' + Math.floor(Math.random() * 101);
  }

  private recursivePrint(ms: number) {
    setTimeout(() => {
      console.log(this.message);
      this.recursivePrint(ms);
    }, ms);
  }

}
