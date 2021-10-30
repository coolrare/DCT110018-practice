import { ArticlesService } from './articles.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  constructor(private articlesService: ArticlesService){ }

  transform(value: Article[], keyword: string): Article[] {
    return this.articlesService.getArticlesByKeyword(value, keyword);
  }

}
