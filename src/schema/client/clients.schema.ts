import { GraphQLFieldConfig, GraphQLID, GraphQLList } from 'graphql';
import { clients } from '../../sampleData';
import ClientType from '../../type/client.type';

const ClientsSchema: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(ClientType),
    resolve(parent, args) {
        return clients;
    },
};

export default ClientsSchema;
