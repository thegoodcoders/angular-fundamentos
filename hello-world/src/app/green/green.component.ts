import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent implements OnInit, OnDestroy, OnChanges {

  @Input() title: string;
  @Output() clickEvt = new EventEmitter<number>();

  private clicks = 0;

  constructor() {
    console.log('%c_[constructor]_ GreenComponent', 'color: lightgreen');
  }

  ngOnInit(): void {
    console.log('%c_[ngOnInit]_ GreenComponent', 'color: lightgreen');
  }

  ngOnDestroy(): void {
    console.log('%c_[ngOnDestroy]_ GreenComponent', 'color: lightgreen');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c_[ngOnChanges]_ GreenComponent', 'color: lightgreen', changes);
  }

  onClick() {
    this.clicks++;
    this.clickEvt.emit(this.clicks);
  }

}
