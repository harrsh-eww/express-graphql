import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from 'graphql';
import { prisma } from '../../../providers/db';
import ClientCommonType from '../../../type/clientCommon.type';

const ClientSignup: GraphQLFieldConfig<any, any, any> = {
    type: ClientCommonType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        contactNumber: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(parent, args) {
        const { name, email, contactNumber } = args;
        const client = await prisma.client.create({
            data: {
                name,
                email,
                contactNumber,
                password: 'abc',
            },
        });

        return {
            result: client,
            message: 'Client created successfully',
            status: 200,
        };
    },
};

export default ClientSignup;
