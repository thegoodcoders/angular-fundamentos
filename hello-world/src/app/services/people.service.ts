import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: Person[] = [];

  constructor() {
    console.log('Service Initialized');
  }
}
