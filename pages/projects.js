import projects from '../data/projectsdata';
import ProjectCard from '../components/projectscard';
import { useTheme } from '../components/ThemeContext';
import Head from 'next/head';


export default function Projects() {
  const { darkMode } = useTheme();

  return (
    <div className={` min-h-screen min-w-fit px-30 container mx-auto p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Head>
        <title>C A G A T A V - Projects</title>
        <meta name="description" content="CAGATAV" />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <h1 className="text-3xl bold mb-4 text-[#903b3b] text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
