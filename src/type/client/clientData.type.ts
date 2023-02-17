import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const ClientDataType = new GraphQLObjectType({
    name: 'ClientData',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        contactNumber: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        password: {
            type: GraphQLString,
        },
    }),
});

export default ClientDataType;
