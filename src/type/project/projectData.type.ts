import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const ProjectDataType = new GraphQLObjectType({
    name: 'ProjectData',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLString,
        },
    }),
});

export default ProjectDataType;
