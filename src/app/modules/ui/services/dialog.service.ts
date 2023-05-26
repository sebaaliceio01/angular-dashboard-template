import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { filter, map, take, tap } from 'rxjs';
import { IFileLoaderDialogOptions } from 'src/app/interfaces/file-loader-dialog.interface';
import { IConfirmationDialogOptions } from 'src/app/interfaces/open-confirmation-dialog-options.interface';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { FileLoaderDialogComponent } from '../components/file-loader-dialog/file-loader-dialog.component';

/*
Usage example confirmation dialog

onClick(): void {
  this.dialog.openConfirmationDialog({
    title: 'Confirm',
    message: 'Are you sure?'
  }, this.callBack)
}

If user is sure, => callback()

callBack(): void {
  ...put your callback flow
}
*/

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(
    private dialog: MatDialog,
  ) { }

  public open<T, D>(component: ComponentType<T>, config?: MatDialogConfig<D>): void {
    this.dialog.open(component, config)
  }

  public openWithRef<T, D, R>(component: ComponentType<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
    return this.dialog.open(component, config)
  }

  public openDialogWithCallback<T, D>(component: ComponentType<T>, config: MatDialogConfig<D> = {}, callBack: () => void): void {
    const ref = this.openWithRef(component, config)

    ref.afterClosed()
      .pipe(
        take(1),
        tap(() => {
          callBack()
        })
      ).subscribe()
  }

  public confirmationDialog(options: IConfirmationDialogOptions): void {

    const ref = this.openWithRef(ConfirmationDialogComponent, {
      data: {
        title: options.data.title,
        message: options.data.message
      },
      disableClose: true
    })

    ref.afterClosed()
      .pipe(
        take(1),
        filter((result) => result === true),
        tap(() => {
          if (options.closeAfterConfirm) {
            options.callback()
            this.closeAll()
            return
          }

          if (!options.closeAfterConfirm) {
            options.callback()
          }
        })
      ).subscribe()
  }


  public fileLoaderDialog(data: IFileLoaderDialogOptions): void {
    this.open(FileLoaderDialogComponent, {
      data: data,
      disableClose: true
    })
  }

  public closeAll() {
    this.dialog.closeAll()
  }
}