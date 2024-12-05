import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { RatingCard } from '@/entities/Rating';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
  const { t } = useTranslation('main');

  const test = (selectedStarsCount: number) => {
    console.log('decrement', selectedStarsCount)
  }

  return (
    <div>
      {t('Главная страница')}
      <Counter/>
      <RatingCard
        title={'decrement'}
        feedbackTitle={'feedbackTitle'}
        hasFeedback={true}
      />
    </div>
  );
};

export default MainPage;