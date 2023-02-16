import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { prisma } from '../../providers/db';
import { clients } from '../../sampleData';
import ClientType from '../../type/client.type';

const ClientRelationSchema: GraphQLFieldConfig<any, any, any> = {
    type: ClientType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    async resolve(parent, args) {
        const client = await prisma.client.findFirst({
            where: {
                id: parent.id,
            },
        });
        return client;
    },
};

export default ClientRelationSchema;
