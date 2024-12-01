import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react"; 
import styles from './GallerySection.module.css';


type Image = {
  src: string;
  alt: string;
};


import img1 from "../../../assets/images/flamingo-9190160_640.webp";
import img2 from "../../../assets/images/fashion-7775824_640.webp";
import img3 from "../../../assets/images/beautiful-8267949_640.webp";
import img4 from "../../../assets/images/skyscraper-9226515_640.jpg";
import img5 from "../../../assets/images/artistic-9176859_640.webp";
import img6 from "../../../assets/images/skyscraper-9226515_640.jpg";
import img7 from "../../../assets/images/artistic-9176859_640.webp";

const images: Image[] = [
  { src: img1, alt: "Image 1" },
  { src: img2, alt: "Image 2" },
  { src: img3, alt: "Image 3" },
  { src: img4, alt: "Image 4" },
  { src: img5, alt: "Image 5" },
  { src: img6, alt: "Image 6" },
  { src: img7, alt: "Image 7" },
];

const GallerySection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(); 
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className={styles.emblaWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {images.map((image, index) => (
            <div className={styles.emblaSlide} key={index}>
              <img src={image.src} alt={image.alt} className={styles.emblaImage} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.emblaButtons}>
        <button
          className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          &#10094;
        </button>
        <button
          className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default GallerySection;










