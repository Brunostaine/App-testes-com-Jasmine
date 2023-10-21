import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-not-that-simple',
  templateUrl: './not-that-simple.component.html',
  styleUrls: ['./not-that-simple.component.scss']
})
export class NotThatSimpleComponent {
  @Input() label: string = '';

  @Output('') myEventEmitter = new EventEmitter<any>();

  onClick(): void {
    this.myEventEmitter.emit();
  }
}
