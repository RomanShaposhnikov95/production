import { Button } from '@/shared/ui/Button';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  // const counterValue = useSelector(getCounterValue);
  const counterValue = useCounterValue();
  const { decrement, increment, add } = useCounterActions()
  const { t } = useTranslation();

  const handleInc = () => {
    increment()
  };

  const handleDec = () => {
    decrement()
  };

  const handleAddFive = () => {
    add(5)
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        onClick={handleInc}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={handleDec}
      >
        {t('decrement')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={handleAddFive}
      >
        {t('handleAddFive')}
      </Button>
    </div>
  );
};
