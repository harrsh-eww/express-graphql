import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import ProjectDataType from './projectData.type';

const ProjectListType = new GraphQLObjectType({
    name: 'ProjectsSchema',
    fields: () => ({
        result: {
            type: new GraphQLList(ProjectDataType),
        },
        message: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLInt,
        },
    }),
});

export default ProjectListType;
