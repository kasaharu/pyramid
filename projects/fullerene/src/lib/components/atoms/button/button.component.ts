import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type ColorTypes = 'primary' | 'danger';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[flButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  color: ColorTypes;

  @HostBinding('class.primary')
  get classIsPrimary() {
    return this.color === 'primary';
  }
  @HostBinding('class.danger')
  get classIsDanger() {
    return this.color === 'danger';
  }

  constructor() {}

  ngOnInit() {}
}
