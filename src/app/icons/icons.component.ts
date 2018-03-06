import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icons',
  styleUrls: ['./icons.component.scss'],
  template: `
  <div>
    <select
    (change)="iconChoice($event.target.value)" class="btn btn-lg">
      <option value="heart" selected="selected">heart</option>
      <option value="ellipsis-v">ellipsis-v</option>
      <option value="star">star</option>
    </select>
  </div>
  `
})
export class IconsComponent {
  @Output() clickSender = new EventEmitter();
  selectedIcon: string = 'heart';

  iconChoice(value: any) {
    this.selectedIcon = value;
    console.log(this.selectedIcon);
  }

}
