import { GraphQLFieldConfig } from 'graphql';
import { projects } from '../../../sampleData';
import ProjectListType from '../../../type/project/projectList.type';

const ProjectsSchema: GraphQLFieldConfig<any, any, any> = {
    type: ProjectListType,
    resolve(parent, args) {
        return {
            result: projects,
            message: 'List fetched successfully',
            status: 200,
        };
    },
};

export default ProjectsSchema;
