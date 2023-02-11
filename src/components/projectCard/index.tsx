import { ProjectInterface } from 'components/types';
import { FunctionComponent } from 'react';

export const ProjectCard: FunctionComponent<{
  project: ProjectInterface;
}> = ({
  project: { name, image_path, category, deployed_url, description, github_url }
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};
