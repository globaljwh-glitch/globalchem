import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  {
    src: 'https://globalchemicalscorp.com/Gallery/images/homepage-slider-12.png'
    /*caption: 'Production Unit'*/
  },
  {
    src: 'https://globalchemicalscorp.com/Gallery/images/homepage-slider-11.png'
  },
  {
    src: 'https://globalchemicalscorp.com/Gallery/images/homepage-slider-9.png'
  },
  {
    src: 'https://globalchemicalscorp.com/Gallery/images/homepage-slider-8.png'
  },
  {
    src: 'https://globalchemicalscorp.com/Gallery/images/homepage-slider-6.png'
  },
  {
    src: 'https://globalchemicalscorp.com/Gallery/images/homepage-slider-5.png'
  }
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="gallery">
        {images.map((img, i) => (
          <div className="galleryThumb">
          <img
            key={i}
            src={img.src}
            alt={`Image ${i + 1}`}
            onClick={() => openModal(i)}
          /></div>
        ))}
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <span className="nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</span>

          <div onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
            <img
              src={images[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
              className="modal-content"
            />
            {/*<div className="modal-caption">/{images[currentIndex].caption}</div>*/}
          </div>

          <span className="nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</span>
        </div>
      )}


    </>
  );
};

export default ImageGallery;
