import path from 'path';

//const resolvePath = dir => path.resolve(__dirname, dir);
const nodeEnv = process.env.NODE_ENV || 'production';
const cloudName = process.env.CLOUD_NAME || 'dicxa9upa';

const appConfig = {
    env : {
        '__DEV__' : nodeEnv === 'development',
        '__PROD__': nodeEnv === 'production',
        '__TEST__': nodeEnv === 'test'},
    'process.env': {
        'NODE_ENV': JSON.stringify(nodeEnv),
        'CLOUD_NAME': JSON.stringify(cloudName)

    }
};

export default appConfig;