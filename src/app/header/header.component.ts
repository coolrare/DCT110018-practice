import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  keyword = 'test';
  isHighlight = false;
  fontSize = 12;

  constructor() {}

  ngOnInit(): void {}

  buttonClick(event: MouseEvent) {
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    console.log(event);
    this.doSearch();
  }

  keyEnterUp() {
    console.log('enter');
    this.doSearch();
  }

  doSearch() {
    this.keyword += '!';
    console.log('search');
  }

}
