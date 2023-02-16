import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { prisma } from '../../providers/db';
import ClientType from '../../type/client.type';

const ClientSchema: GraphQLFieldConfig<any, any, any> = {
    type: ClientType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    async resolve(parent, args) {
        const client = await prisma.client.findFirst({
            where: {
                id: args.id,
            },
        });
        return client;
    },
};

export default ClientSchema;
