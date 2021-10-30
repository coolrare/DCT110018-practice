import { ArticlesService } from './articles.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  // get list() {
  //   return this.articlesService.list;
  // }
  list: Article[] = [];

  keyword$ = new BehaviorSubject<string>('');

  list$ = this.keyword$.pipe(
    switchMap((keyword) =>
      keyword === ''
        ? this.articlesService.getArticle()
        : this.articlesService.queryArticle(keyword)
    )
  );

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    // this.articlesService.getArticle().subscribe((articles) => {
    //   this.list = articles;
    // });
  }

  filterArticles(keyword: string) {
    this.keyword$.next(keyword);
    // this.articlesService.filterArticles(keyword);
    // this.articlesService.queryArticle(keyword).subscribe(articles => {
    //   this.list = articles
    // })
  }
}

