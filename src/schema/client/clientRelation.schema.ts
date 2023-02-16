import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { clients } from '../../sampleData';
import ClientType from '../../type/client.type';

const ClientRelationSchema: GraphQLFieldConfig<any, any, any> = {
    type: ClientType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    resolve(parent, args) {
        return clients.find((client) => client.id === parent.id);
    },
};

export default ClientRelationSchema;
