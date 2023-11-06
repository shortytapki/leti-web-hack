import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from './config/StateSchema';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from './config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const navigate = useNavigate();
  const store = createReduxStore(navigate);
  return <Provider store={store}>{children}</Provider>;
};
