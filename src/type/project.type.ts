import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import ClientRelationSchema from '../schema/query/client/clientRelation.schema';

const ProjectType = new GraphQLObjectType({
    name: 'Project',
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

export default ProjectType;
