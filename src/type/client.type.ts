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
        phone: {
            type: GraphQLString,
        },
    }),
});

export default ClientType;
