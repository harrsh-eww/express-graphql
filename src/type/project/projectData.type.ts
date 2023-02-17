import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import ClientRelationSchema from '../../schema/query/client/clientRelation.schema';

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
        clientId: ClientRelationSchema,
    }),
});

export default ProjectDataType;
