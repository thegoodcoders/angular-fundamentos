import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  template: '<p>{{ title }}</p> <app-table></app-table>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hola 🌍 desde Angular 🚀';

  value = 0;
  isProgressVisible = true;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.increaseProgressBar();
  }

  private increaseProgressBar() {
    const interval = setInterval(() => {
      this.value++;
      console.log('progress increasing', this.value);
      if (this.value >= 100) {
        clearInterval(interval);
      }
    }, 25);
  }

  openSnackBar() {
    const snackBarRef = this.snackBar.open('Hola desde SnackBar + Agnular!!', 'DESHACER');

    // snackBarRef.afterDismissed().subscribe(() => console.log('Se ha cerrado!'));

    snackBarRef.onAction().subscribe(() => {
      console.log('Esto se ejecuta al hacer click en DESHACER');
      snackBarRef.dismiss();
    });


  }
}
