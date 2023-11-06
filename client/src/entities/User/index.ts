export { userActions, userReducer } from './model/slice/userSlice';

export { type User } from './model/types/user';

export { login } from './model/services/login';
export { register } from './model/services/register';

export { getError, getAuthData } from './model/selectors/userSelectors';
