import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseRolePipe } from './pipes/parse-role.pipe';

@NgModule({
  declarations: [
    ParseRolePipe
  ],
  imports: [
    CommonModule
  ], exports: [
    ParseRolePipe
  ]
})
export class PipeModule { }
