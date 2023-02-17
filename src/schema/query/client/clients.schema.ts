import { GraphQLFieldConfig } from 'graphql';
import { prisma } from '../../../providers/db';
import ClientListType from '../../../type/client/clientList.type';

const ClientsSchema: GraphQLFieldConfig<any, any, any> = {
    type: ClientListType,
    async resolve(parent, args) {
        const clients = await prisma.client.findMany();

        return {
            result: clients,
            message: 'List fetched successfully',
            status: 200,
        };
    },
};

export default ClientsSchema;
