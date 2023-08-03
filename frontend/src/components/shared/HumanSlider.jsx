import React, { useState, useEffect } from "react";
import human3 from "../../assets/images/human3.png";
import human4 from "../../assets/images/human4.png";
import human5 from "../../assets/images/human5.png";

const ImageSlider = () => {
  const images = [human3, human4, human5]; // Resim dosyalarının adları
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 3 saniyede bir resmin efektini değiştiren bir zamanlayıcı
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer); // Komponent kaldırıldığında zamanlayıcıyı temizle
  }, [images.length]);

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`human${index + 3}`}
          className={"flow-3-human" + (index + 3)}
          style={
            index === currentImageIndex
              ? null
              : {
                  filter: "grayscale(100%)",
                  transition: "all 0.2s ease-in-out",
                }
          }
        />
      ))}
    </div>
  );
};

export default ImageSlider;
