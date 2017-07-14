import {createClient} from 'contentful'

export const contentfulClient = () => createClient({
    accessToken: '1e346c90f5950976135d1cad468e1e2df9842eb9dfaf0d96cd0e2f66d7475ded',
    space: 'w9v8tyww8nf0'
});