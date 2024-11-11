import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment, any>{
    isLoading?: boolean;
    error?: string;
}
