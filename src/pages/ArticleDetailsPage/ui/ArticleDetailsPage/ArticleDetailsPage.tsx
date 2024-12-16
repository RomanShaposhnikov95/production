import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import cls from './ArticleDetailsPage.module.scss';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import { useTranslation } from 'react-i18next';
import { ArticleRating } from '@/features/articleRating';



interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();
  // const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled')

  if (!id) {
    return null;
  }


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap={'16'} max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Оценка статей скоро появится!')}</Card>}
          />
          {/*{isArticleRatingEnabled && <ArticleRating articleId={id} />}*/}
          {/*<ArticleRating articleId={id} />*/}
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
