import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import ClientType from './client.type';

const ClientCommonType = new GraphQLObjectType({
    name: 'ClientsCommon',
    fields: () => ({
        result: {
            type: ClientType,
        },
        message: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLInt,
        },
    }),
});

export default ClientCommonType;
