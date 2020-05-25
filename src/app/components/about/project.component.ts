import { Component } from '@angular/core'

@Component({
  selector: 'nz-demo-carousel-basic',
  template: `
  This is project
  `,
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
      }
    `
  ]
})
export class ProjectComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx'
}
