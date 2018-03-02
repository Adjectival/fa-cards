import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <h1 class="mt-1">FontAwesome Masker</h1>
  
    <div class="card p-3 col-8 offset-2">
    <div class="fa-3x">
      <i class="fas fa-star" data-fa-transform="shrink-10 up-0.1" data-fa-mask="fas fa-cloud"></i>
    </div>
    
    <input type="text" [value]="main"><label for="main">Main Icon</label>
    <input type="text" [value]="mask"><label for="mask">Mask Icon</label>
    <input type="text" [value]="sizer"><label for="sizer">Size Change</label>
    <input type="text" [value]="upDown"><label for="up">Up/Down Change</label>

    <button type="button" name="button" class="btn mt-3">
        <h2>Save? When Express & Mongo arrive...</h2>
    </button>
    </div>
  `
})
export class AppComponent {
  main: string = 'star';
  mask: string = 'cloud';
  sizer: number = 10;
  upDown: number = 0.1;
}
