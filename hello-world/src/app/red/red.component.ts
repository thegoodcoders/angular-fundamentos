import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.scss']
})
export class RedComponent implements OnInit, OnDestroy, OnChanges {

  @Input() title: string;
  @Output() clickEvt = new EventEmitter<number>();

  private clicks = 0;

  constructor() {
    console.log('%c_[constructor]_ RedComponent', 'color: lightcoral');
  }

  ngOnInit(): void {
    console.log('%c_[ngOnInit]_ RedComponent', 'color: lightcoral');
  }

  ngOnDestroy(): void {
    console.log('%c_[ngOnDestroy]_ RedComponent', 'color: lightcoral');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c_[ngOnChanges]_ RedComponent', 'color: lightcoral', changes);
  }

  onClick() {
    this.clicks++;
    this.clickEvt.emit(this.clicks);
  }

}
