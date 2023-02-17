import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import ProjectDataType from './projectData.type';

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        result: {
            type: ProjectDataType,
        },
        message: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLInt,
        },
    }),
});

export default ProjectType;
