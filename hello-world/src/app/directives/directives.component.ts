import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {

  text: string;
  names: string[] = [];
  people: Person[] = [];
  lastId = 0;

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.people;
  }

  ngOnInit(): void {
  }

  save() {
    if (this.text.length) {
      this.names.push(this.text);
      this.text = '';
    }
  }

  savePerson() {
    if (this.text.length) {
      const person: Person = {
        id: ++this.lastId,
        icon: '😎',
        name: this.text
      };
      this.people.push(person);
      this.text = '';
    }
  }

  removeAll() {
    this.peopleService.people.length = 0;
  }

}
