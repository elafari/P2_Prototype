import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <hr>
    <p>
      footer Works!
    </p>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
