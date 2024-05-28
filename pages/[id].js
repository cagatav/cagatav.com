import { useRouter } from 'next/router';
import projects from '../data/projectsdata';

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const project = projects.find((project) => project.id === parseInt(id, 10));

  if (!project) {
    return <p className='text-3xl text-center text-[#903b3b]'>Project not found!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[#903b3b] text-center">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full object-cover mb-4" />
      <p>{project.description}</p>
    </div>
  );
}
