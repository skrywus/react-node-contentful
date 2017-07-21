import {createClient} from 'contentful'
import {createClient as createClientManager} from 'contentful-management';
export const space = 'w9v8tyww8nf0';
export const accessToken = '1e346c90f5950976135d1cad468e1e2df9842eb9dfaf0d96cd0e2f66d7475ded';
export const accessTokenManager = 'CFPAT-9723bfbf1d986dea0e03d9e22b417d8161c65238635094d57347e632c7bd52a0';

export const contentfulClient = () => createClient({
    accessToken,
    space
});
export const contentfulManager = () => createClientManager({
    accessToken: accessTokenManager
});