import { GraphQLFieldConfig, GraphQLID } from 'graphql';
import { projects } from '../../../sampleData';
import ProjectType from '../../../type/project.type';

const ProjectSchema: GraphQLFieldConfig<any, any, any> = {
    type: ProjectType,
    args: {
        id: {
            type: GraphQLID,
        },
    },
    resolve(parent, args) {
        return projects.find((project) => project.id === args.id);
    },
};

export default ProjectSchema;
