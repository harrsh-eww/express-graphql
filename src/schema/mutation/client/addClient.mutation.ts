import {
    GraphQLFieldConfig,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
} from 'graphql';
import { prisma } from '../../../providers/db';
import ClientType from '../../../type/client/client.type';

const CreateClientSchema: GraphQLFieldConfig<any, any, any> = {
    type: ClientType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        contactNumber: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    async resolve(parent, args) {
        const { name, contactNumber, email, password } = args;

        const existingClient = await prisma.client.findFirst({
            where: {
                AND: {
                    OR: [
                        {
                            email,
                        },
                        {
                            contactNumber,
                        },
                    ],
                },
            },
        });
        if (existingClient) {
            return {
                result: null,
                message: 'Client already exists',
                status: 400,
            };
        }

        const client = await prisma.client.create({
            data: {
                name,
                contactNumber,
                email,
                password,
            },
        });

        return {
            result: client,
            message: 'Client created successfully',
            status: 200,
        };
    },
};

export default CreateClientSchema;
