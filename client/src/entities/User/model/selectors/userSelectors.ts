import { StateSchema } from '@app/providers';

export const getError = (state: StateSchema) => state.user.error;

export const getAuthData = (state: StateSchema) => state.user.authData;
