import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from './GallerySection.module.css';
import { images } from './imageList'


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










