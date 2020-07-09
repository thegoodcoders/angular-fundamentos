import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../person.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columns = ['id', 'icon', 'name', 'description', 'createdAt'];
  dataSource: MatTableDataSource<Person>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([
      { id: 1, icon: '👨‍🎓', name: 'Alejandro', description: 'Encargado de ayudar y enseñar disfrutando!', createdAt: new Date('01-15-2020') },
      { id: 2, icon: '👩‍🎓', name: 'Carla', description: 'Encargada de gestión', createdAt: new Date('06-20-2020') },
      { id: 3, icon: '👩‍🎓', name: 'Claudia', description: 'Encargada de finanzas', createdAt: new Date('04-01-2020') },
      { id: 4, icon: '👩‍🎓', name: 'Paula', description: 'Ayudante de desarrollo', createdAt: new Date('03-29-2020') },
      { id: 5, icon: '👩‍🎓', name: 'Cristina', description: 'Ayudante de desarrollo', createdAt: new Date('09-07-2020') },
      { id: 6, icon: '👨‍🎓', name: 'Alvaro', description: 'Ayudante de desarollo', createdAt: new Date('03-11-2020') },
      { id: 7, icon: '👨‍🎓', name: 'Pedro', description: 'Ayudante de finanzas', createdAt: new Date('02-12-2020') },
      { id: 8, icon: '👩‍🎓', name: 'Maria', description: 'Ayudante de gestión', createdAt: new Date('01-22-2020') },
      { id: 9, icon: '👨‍🎓', name: 'Hector', description: 'Encargado de contenido', createdAt: new Date('04-03-2020') },
      { id: 10, icon: '👩‍🎓', name: 'Victoria', description: 'Encargada de recursos', createdAt: new Date('06-19-2020') },
    ]);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
