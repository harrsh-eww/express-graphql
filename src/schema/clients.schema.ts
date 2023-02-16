import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { clients } from '../sampleData';
import ClientType from '../type/client.type';

const ClientField: GraphQLFieldConfig<any, any, any> = {
    type: ClientType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
    },
};

export default ClientField;
