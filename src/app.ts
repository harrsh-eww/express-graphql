import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import env from './env';
import VerifyJwt from './middlewares/verifyJwt';
import schema from './schema/schema';

const app = express();
const PORT = env.app.port;

app.use(VerifyJwt);

app.use(
    '/graphql',
    graphqlHTTP((req, res) => ({
        schema,
        graphiql: env.isDevelopment,
        pretty: true,
        rootValue: {
            request: req,
            response: res,
        },
    }))
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
