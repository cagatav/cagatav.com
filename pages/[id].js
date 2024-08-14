import { useState } from 'react';
import { useRouter } from 'next/router';
import projects from '../data/projectsdata';
import Modal from './Modal';
import { useTheme } from '../components/ThemeContext';

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { darkMode } = useTheme();

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const project = projects.find((project) => project.id === parseInt(id, 10));

  if (!project) {
    return <p className='text-3xl text-center text-[#903b3b]'>Project not found!</p>;
  }

  const getWebsiteDisplay = (url) => {
    return url.replace(/^https?:\/\//, '');
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={`min-h-screen container mx-auto p-4 text-center transition-all duration-300  ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="text-3xl bold mb-4 text-[#903b3b] text-center">{project.name}</h1>
      <ul className="list-disc list-inside mb-5">
        {project.description.map((item, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      {project.iframe && (
        <div className="mb-5" dangerouslySetInnerHTML={{ __html: project.iframe }} />
      )}
      <p className="mb-5">
        {project.website ? (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            {getWebsiteDisplay(project.website)}
          </a>
        ) : (
          <span className="text-gray-500"></span>
        )}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.imagedata && project.imagedata.map((item, idx) => (
          <div key={idx} className="relative">
            <img
              src={item}
              alt={`image-${idx}`}
              className="w-full h-auto object-cover mb-4 transform transition duration-500 hover:scale-105 cursor-pointer"
              onClick={() => openModal(item)}
            />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
}
