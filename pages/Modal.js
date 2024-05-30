import React from 'react';

export default function Modal({ isOpen, onClose, imageSrc }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50" onClick={handleOverlayClick}>
      <div className="relative bg-white rounded-lg max-w-5xl mx-auto my-8 shadow-lg scale-in" onClick={handleModalClick}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl transform transition duration-500 !filter !invert"
          style={{ mixBlendMode: 'difference' }}
        >
          &times;
        </button>
        <img src={imageSrc} alt="Enlarged" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}
