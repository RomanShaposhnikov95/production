import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  const test = (selectedStarsCount: number) => {
    console.log('decrement', selectedStarsCount)
  }

  return (
    <Page data-testid="MainPage">
      {t('Главная страница')}
      <Counter/>
      <RatingCard
        title={'decrement'}
        feedbackTitle={'feedbackTitle'}
        hasFeedback={true}
      />
    </Page>
  );
};

export default MainPage;