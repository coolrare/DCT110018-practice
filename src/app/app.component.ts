import { ArticlesService } from './articles.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'conduitxxxx';
  sbutitle = 'A place to share your <u>knowledge</u>.';
  keyword = 'test';

  list2 = [
    {
      title: 'Test',
      createdAt: '2021-10-30',
    },
    {
      title: 'Test 2',
      createdAt: '2021-10-30',
    },
  ];

  get list() {
    return this.articlesService.list;
  }

  constructor(private articlesService: ArticlesService) {

  }

  filterArticles(keyword: string) {
    this.articlesService.filterArticles(keyword);
  }
}
