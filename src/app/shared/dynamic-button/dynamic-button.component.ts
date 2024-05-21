import {
  Component,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.css',
})
export class DynamicButtonComponent implements OnInit {
  @Input() btnType?: string;
  @Input() btnText?: string;
  @Input() btnIcon?: string;
  @Input() btnClass?: string;
  @Input() selected?: boolean;

  private btnInitClass?: string;

  ngOnInit(): void {
    this.btnInitClass = this.btnClass;
  }

  toggleSelectionStandardBtn() {
    this.toggleSelection();
  }

  toggleSelectionCustomBtn() {
    this.toggleSelection();

    this.btnClass = this.selected ? 'menu-selected' : 'menu-std';
  }

  toggleSelectionCircleBtn() {
    this.toggleSelection();

    this.btnClass =
      this.btnClass === this.btnInitClass ? 'light-red' : this.btnInitClass;
    this.btnIcon = this.btnIcon === 'add' ? 'done' : 'add';
  }

  toggleSelection() {
    this.selected = !this.selected;
  }
}
