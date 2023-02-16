import { GraphQLFieldConfig, GraphQLID, GraphQLList } from 'graphql';
import { prisma } from '../../providers/db';
import { clients } from '../../sampleData';
import ClientType from '../../type/client.type';

const ClientsSchema: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(ClientType),
    async resolve(parent, args) {
        const clients = await prisma.client.findMany();
        return clients;
    },
};

export default ClientsSchema;
