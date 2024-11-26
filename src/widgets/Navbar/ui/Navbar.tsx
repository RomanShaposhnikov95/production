import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { TextTheme, Text } from 'shared/ui/Text/Text';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Ulbi TV App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
};


