import React, { useState, useEffect } from 'react';



function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
   const endpoint = 'https://raw.githubusercontent.com/Mayumi767/junk/main/colibook.json';

    fetch(endpoint)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        const imagesData = data.map(image => ({ url: image.url }));
        setImages(imagesData);
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt="Gallery Image"
              className="cursor-pointer w-full h-auto"
              style={{ maxWidth: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
