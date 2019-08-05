import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type ColorTypes = 'primary';

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

  constructor() {}

  ngOnInit() {}
}
