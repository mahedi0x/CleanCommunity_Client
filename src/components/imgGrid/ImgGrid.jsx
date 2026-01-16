import { useState, useEffect } from "react";
import "./imgGrid.css";

const ImgGrid = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      alt: "Air pollution",
      size: "col-span-1 row-span-2",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Industrial pollution",
      size: "col-span-2",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Water pollution",
      size: "col-span-1",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Garbage waste",
      size: "col-span-1",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Urban pollution",
      size: "col-span-2",
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/3807512/pexels-photo-3807512.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      alt: "Environmental damage",
      size: "col-span-1 row-span-2",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="img-grid-section">
      <div className="gallery-container">
        <div className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item ${image.size} ${
                index === activeImageIndex ? "active" : ""
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={image.url} alt={image.alt} />
              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImgGrid;
