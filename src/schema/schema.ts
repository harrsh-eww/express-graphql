import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import CreateClientSchema from './mutation/client/addClient.mutation';
import ClientSchema from './query/client/client.schema';
import ClientsSchema from './query/client/clients.schema';
import ProjectSchema from './query/project/project.schema';
import ProjectsSchema from './query/project/projects.schema';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            clients: ClientsSchema,
            client: ClientSchema,
            projects: ProjectsSchema,
            project: ProjectSchema,
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: {
            createClient: CreateClientSchema,
        },
    }),
});

export default schema;
