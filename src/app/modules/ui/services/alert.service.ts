import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private readonly snackBar: MatSnackBar,
  ) { }

  error(message: string) {
    return this.snackBar.open(message, 'OK', {
      panelClass: 'app-snack-error',
      duration: 3000,
    })
  }

  success(message: string) {
    return this.snackBar.open(message, 'OK', {
      panelClass: 'app-snack-success',
      duration: 3000,
    })
  }

  info(message: string) {
    return this.snackBar.open(message, 'OK', {
      panelClass: 'app-snack-info',
      duration: 3000,
    })
  }
}
