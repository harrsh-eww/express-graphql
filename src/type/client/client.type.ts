import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import ClientDataType from './clientData.type';

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        result: {
            type: ClientDataType,
        },
        message: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLInt,
        },
    }),
});

export default ClientType;
