import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { projects } from '../../../sampleData';
import ProjectType from '../../../type/project/project.type';

const ProjectSchema: GraphQLFieldConfig<any, any, any> = {
    type: ProjectType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    resolve(parent, args) {
        return {
            result: projects.find((project) => project.id === args.id),
            message: 'Details fetched successfully',
            status: 200,
        };
    },
};

export default ProjectSchema;
