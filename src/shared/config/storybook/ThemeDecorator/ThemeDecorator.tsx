import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

// export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
//   <div className={`app ${theme}`}>
//     <StoryComponent />
//   </div>
// );


export const ThemeDecorator = (theme: Theme) => {
  const DecoratedComponent = (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent/>
      </div>
    </ThemeProvider>
  );

  DecoratedComponent.displayName = `ThemeDecorator(${theme})`; // Устанавливаем имя для декорированного компонента
  return DecoratedComponent;
};