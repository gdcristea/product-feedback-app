import {Component, EventEmitter, Input, Output} from '@angular/core';

type backgroundColors = 'purple' | 'blue' | 'darkblue' | 'red';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  /**
   * Content of the button
   */
  @Input() content: string;

  /**
   * Background color of the button
   * Can be: purple, blue, darkblue or red
   */
  @Input() backgroundColor: backgroundColors;

  /**
   * Emit the content of the button
   */
  @Output() onClickEmit: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Emit the content of the button on click
   */
  onClickButton(): void {
    this.onClickEmit.emit(this.content);
  }
}
