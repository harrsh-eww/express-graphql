import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from 'graphql';
import { z } from 'zod';
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
        try {
            const { name, contactNumber, email, password } = args;

            console.log(parent.request.user);

            const isValidated = await schema.parseAsync(args);
            console.log(isValidated);

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
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                console.error('error for uploads', error.issues);

                return {
                    result: null,
                    message: error.issues[0].message,
                    status: 400,
                };
            }

            return {
                result: null,
                message: 'Internal server error',
                status: 500,
            };
        }
    },
};

export default CreateClientSchema;

const schema = z.object({
    name: z
        .string()
        .min(1, 'Name must be at least one character long.')
        .max(18),
    contactNumber: z
        .string()
        .min(1, 'Contact number must be at least one character long.')
        .max(18),
    email: z.string().email('Please enter a valid email address.'),
    password: z
        .string()
        .min(1, 'Password must be at least one character long.')
        .max(18),
});
