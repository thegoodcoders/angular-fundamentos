import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit, OnDestroy, OnChanges {

  @Input() title: string;
  @Output() clickEvt = new EventEmitter<number>();

  clicks = 0;
  isEven = true;

  constructor() {
    console.log('%c_[constructor]_ BlueComponent_', 'color: lightblue;');
  }

  ngOnInit(): void {
    console.log('%c_[ngOnInit]_ BlueComponent_', 'color: lightblue');
  }

  ngOnDestroy(): void {
    console.log('%c_[ngOnDestroy]_ BlueComponent_', 'color: lightblue');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%c_[ngOnChanges]_ BlueComponent_', 'color: lightblue', changes);
  }

  onClick(event: MouseEvent) {
    // console.log(event);
    this.clicks++;
    this.clickEvt.emit(this.clicks);
  }

  sayHi(name: string, event?: MouseEvent) {
    // console.log(`Hola ${name}`);
    if (event) {
      event.stopPropagation();
    }
  }

}
