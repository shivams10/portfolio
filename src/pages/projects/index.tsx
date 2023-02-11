import { projects } from 'asserts/services';
import { ProjectCard } from 'components/projectCard';

function Projects() {
  return (
    <div>
      <nav>Navbar</nav>
      <div className="grid grid-cols-12 gap-4 my-3">
        {projects.map(project => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            {<ProjectCard project={project} key={project.name} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
