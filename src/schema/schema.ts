import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ProjectSchema from './query/project/project.schema';
import ProjectsSchema from './query/project/projects.schema';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            projects: ProjectsSchema,
            project: ProjectSchema,
        },
    }),
});

export default schema;
