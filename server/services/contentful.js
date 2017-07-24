import {createClient} from 'contentful'
import {createClient as createClientManager} from 'contentful-management';
import {SPACE, ACCESS_TOKEN, ACCESS_TOKEN_MANAGER} from './../_tokens';

console.log(SPACE, ACCESS_TOKEN, ACCESS_TOKEN_MANAGER);
export const contentfulClient = () => createClient({
    accessToken: ACCESS_TOKEN,
    space: SPACE
});
export const contentfulManager = () => createClientManager({
    accessToken: ACCESS_TOKEN_MANAGER
});