import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    console.log('project.link:', project.link);
    console.log('Current path:', router.asPath);
    router.push(project.link); // Redirect to the project link
  };

  return (
    <div 
      className="relative bg-transparent rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick} 
    >
      <div className="relative">
        <img src={project.image} alt={project.name} className="w-full object-cover" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-lg font-semibold" >{project.name}</h2>
            
          </div>
        )}
      </div>
    </div>
  );
}
