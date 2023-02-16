import express from 'express';
import env from './env';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema';

const app = express();
const PORT = env.app.port;

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: env.isDevelopment,
        pretty: true,
    })
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
