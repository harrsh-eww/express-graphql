import { GraphQLFieldConfig, GraphQLList } from 'graphql';
import { prisma } from '../../../providers/db';
import ClientCommonType from '../../../type/clientCommon.type';

const ClientsSchema: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(ClientCommonType),
    async resolve(parent, args) {
        const clients = await prisma.client.findMany();
        return {
            result: clients,
            message: 'Details fetched successfully',
            status: 200,
        };
    },
};

export default ClientsSchema;
