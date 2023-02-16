import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { prisma } from '../../../providers/db';
import ClientCommonType from '../../../type/clientCommon.type';

const ClientRelationSchema: GraphQLFieldConfig<any, any, any> = {
    type: ClientCommonType,
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
        return {
            result: client,
            message: 'Details fetched successfully',
            status: 200,
        };
    },
};

export default ClientRelationSchema;
