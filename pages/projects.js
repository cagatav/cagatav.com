import projects from '../data/projectsdata';
import ProjectCard from '../components/projectscard';
import { useTheme } from './ThemeContext';

export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <div className={` min-h-screen min-w-fit px-30 container mx-auto p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-3xl font-bold mb-4 text-[#903b3b] text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
