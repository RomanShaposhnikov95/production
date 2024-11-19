import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, any> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
}
