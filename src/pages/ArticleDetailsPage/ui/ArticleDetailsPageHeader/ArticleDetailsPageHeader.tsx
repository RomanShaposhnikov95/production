import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from '@/shared/ui/Stack';
import {getRouteArticleEdit} from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
   if (article) {
     navigate(getRouteArticleEdit(article.id));
   }
  }, [article, navigate]);

  return (
    <HStack max justify={'between'} className={classNames('', {}, [className])}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {canEdit && (
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onEditArticle}
        >
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
});
