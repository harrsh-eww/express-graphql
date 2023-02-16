import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ClientsField from './client.schema';
import ClientField from './client.schema';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            clients: ClientsField,
            client: ClientField,
        },
    }),
});

export default schema;
