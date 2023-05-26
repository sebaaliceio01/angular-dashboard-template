import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UiModule } from '../ui/ui.module';
import { PipeModule } from '../pipe/pipe.module';
    

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    PipeModule,
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
