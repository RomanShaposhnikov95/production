import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';


// export const StoreDecorator = (state: Partial<StateSchema>) => (Story: StoryFn) => (
//   <StoreProvider initialState={state}>
//     <Story/>
//   </StoreProvider>
// );

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}


export const StoreDecorator = (state: Partial<StateSchema>, asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => {
  const DecoratedStory = (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );

  DecoratedStory.displayName = 'StoreDecorator'; // Установите displayName

  return DecoratedStory;
};