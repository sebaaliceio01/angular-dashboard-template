import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { IFileLoaderDialogOptions } from 'src/app/interfaces/file-loader-dialog.interface';

@Component({
  selector: 'app-file-loader-dialog',
  templateUrl: './file-loader-dialog.component.html',
  styleUrls: ['./file-loader-dialog.component.scss']
})
export class FileLoaderDialogComponent implements OnInit, OnDestroy {

  isLoading: boolean = false

  loadingSubscription: Subscription

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IFileLoaderDialogOptions,
    public dialogRef: MatDialogRef<FileLoaderDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.data.func()
    this.loadingSubscription = this.data.isLoading.subscribe((result) => {
      this.isLoading = result
    })
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe()
  }
}
