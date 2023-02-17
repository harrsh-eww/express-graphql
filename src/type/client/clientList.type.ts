import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import ClientDataType from './clientData.type';

const ClientListType = new GraphQLObjectType({
    name: 'ClientsSchema',
    fields: () => ({
        result: {
            type: new GraphQLList(ClientDataType),
        },
        message: {
            type: GraphQLString,
        },
        status: {
            type: GraphQLInt,
        },
    }),
});

export default ClientListType;
