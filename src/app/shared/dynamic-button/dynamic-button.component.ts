import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.css',
})
export class DynamicButtonComponent {
  @Input() btnType?: string;
}
