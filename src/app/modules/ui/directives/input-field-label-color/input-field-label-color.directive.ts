import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { InputLabelComponent } from '../../components/input-label/input-label.component';

@Directive({
  selector: '[uiInputLabelColor]'
})
export class InputFieldLabelColorDirective implements AfterViewInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2, private elementRef: ElementRef<InputLabelComponent>) {
  }

  ngAfterViewInit(): void {
  }
}
