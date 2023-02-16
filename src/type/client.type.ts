import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        contactNumber: {
            type: GraphQLString,
        },
    }),
});

export default ClientType;
