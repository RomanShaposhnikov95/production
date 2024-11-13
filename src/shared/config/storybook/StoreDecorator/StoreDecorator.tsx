import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';


// export const StoreDecorator = (state: Partial<StateSchema>) => (Story: StoryFn) => (
//   <StoreProvider initialState={state}>
//     <Story/>
//   </StoreProvider>
// );

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer
}


export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => {
  const DecoratedStory = (Story: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );

  DecoratedStory.displayName = 'StoreDecorator'; // Установите displayName

  return DecoratedStory;
};