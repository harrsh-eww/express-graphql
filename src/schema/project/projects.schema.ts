import { GraphQLFieldConfig, GraphQLList } from 'graphql';
import { projects } from '../../sampleData';
import ProjectType from '../../type/project.type';

const ProjectsSchema: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLList(ProjectType),
    resolve(parent, args) {
        return projects;
    },
};

export default ProjectsSchema;
