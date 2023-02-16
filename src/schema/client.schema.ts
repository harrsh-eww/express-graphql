import { GraphQLFieldConfig, GraphQLID, GraphQLList } from 'graphql';
import { clients } from '../sampleData';
import ClientType from '../type/client.type';

const ClientsField: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(ClientType),
    resolve(parent, args) {
        return clients;
    },
};

export default ClientsField;
