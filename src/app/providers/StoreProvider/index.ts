import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkConfig, StateSchemaKey } from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
};

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
  ReduxStoreWithManager,
  StateSchemaKey
}