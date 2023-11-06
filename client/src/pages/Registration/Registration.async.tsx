import {lazy} from 'react';

export const RegistrationPageAsync = lazy(async () => {
    const page = await import('./Registration');
    return page;
});
