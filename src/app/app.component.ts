import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <h1 class="mt-1">FontAwesome Masker</h1>
  
    <div class="card p-3 col-8 offset-2">
    <div class="fa-3x">
      <i class="fas fa-{{main}}" data-fa-transform="shrink-10 up-0.1" data-fa-mask="fas fa-cloud"></i>
      <h4 [ngClass]="{
        'text-success':isHappy === true,
        'text-danger':isHappy === false
      }"
      >{{main}} inside {{mask}}
      <span>{{ isHappy ? '😂' : '🤨' }}</span>
      <button class="btn" (click)="happyBtnClick()">Change Class!</button>
      <p>Simple [ngClass] trial works to toggle this
      </p>
      </h4>
      <h3>fas fa-{{test}}
        <select
        (change)="iconChange($event.target.value)"
        class="btn btn-lg"
        >
          <option value="heart">heart</option>
          <option value="ellipsis-v">ellipsis-v</option>
          <option value="star">star</option>
        </select>
        <i [ngClass]="[
          'fas fa-'+test
        ]"></i>
        <p>Dynamic class changing for icon still elusive
        </p>
      </h3>
    </div>
    
    <input type="text" [value]="main"
      (blur)="handleMain($event)"><label for="main">Main Icon</label>
    <input type="text" [value]="mask"><label for="mask">Mask Icon</label>
    <input type="text" [value]="sizer"><label for="sizer">Size Change</label>
    <input type="text" [value]="upDown"><label for="up">Up/Down Change</label>

    <button type="button" name="button" class="btn mt-3">
        <h5>Save? When Express & Mongo arrive...</h5>
    </button>
    </div>
  `
})
export class AppComponent {
  isHappy: boolean = false;
  
  test: string = 'heart';
  iconChange(optionFromMenu) {
    this.test = event.target.value;
  }
  
  main: string = 'heart';
  handleMain(event: any) {
    this.main = event.target.value;
  }
  
  mask: string = 'cloud';
  handleMask(event: any) {
    this.mask = event.target.value;
  }
  sizer: number = 10;
  upDown: number = 0.1;

  happyBtnClick() {
    this.isHappy = !this.isHappy;
  }

}
