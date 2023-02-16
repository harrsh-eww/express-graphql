import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ClientSchema from './client/client.schema';
import ClientsSchema from './client/clients.schema';
import ProjectSchema from './project/project.schema';
import ProjectsSchema from './project/projects.schema';

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
});

export default schema;
