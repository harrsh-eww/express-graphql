import dotenv from 'dotenv';
import { getOsEnv, normalizePort } from './libs/env';

dotenv.config();

/**
 * Environment variables
 */
const env = {
    node: getOsEnv('APP_ENV'),
    isDevelopment: ['local', 'development'].includes(getOsEnv('APP_ENV')),

    app: {
        port: normalizePort(getOsEnv('APP_PORT')) || getOsEnv('APP_PORT'),
        host: getOsEnv('APP_URL') || 'http://localhost:8000',
        api_prefix: getOsEnv('API_PREFIX'),
        root_dir: getOsEnv('APP_ENV') !== 'local' ? 'dist' : 'src',

        cors: {
            urls: getOsEnv('CORS_AVAILABLE_LINKS').split(','),
        },
    },
};

export default env;
