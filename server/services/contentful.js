import {createClient} from 'contentful'
import {createClient as createClientManager} from 'contentful-management';
import {SPACE, ACCESS_TOKEN, ACCESS_TOKEN_MANAGER} from './../_tokens';


export const contentfulClient = () => createClient({
    ACCESS_TOKEN,
    SPACE
});
export const contentfulManager = () => createClientManager({
    accessToken: ACCESS_TOKEN_MANAGER
});