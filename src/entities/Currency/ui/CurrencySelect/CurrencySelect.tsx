import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];


export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    // <Select
    //   className={classNames('', {}, [className])}
    //   label={t('Укажите валюту')}
    //   options={options}
    //   value={value}
    //   onChange={onChangeHandler}
    //   readonly={readonly}
    // />
    <ListBox
      className={className}
      value={value}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
