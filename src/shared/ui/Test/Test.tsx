import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Test.module.scss';

interface TestProps {
    className?: string;
}

export const Test = ({ className }: TestProps) => {
  return (
    <div className={classNames(cls.Test, {}, [className])}>

    </div>
  );
};