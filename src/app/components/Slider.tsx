'use client';

import { useEffect, useRef, useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const maxItems = 5;
  const controlBoxRef = useRef<HTMLDivElement>(null);

  // Handle slide navigation
  const goToSlide = (index: number, direction?: 'left' | 'right') => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);

    // Auto-scroll thumbnail control box
    if (controlBoxRef.current) {
      const item = controlBoxRef.current.querySelector(
        `[data-index="${index}"]`
      ) as HTMLElement;
      if (item) {
        const boxWidth = controlBoxRef.current.offsetWidth;
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        const scrollLeft = controlBoxRef.current.scrollLeft;

        // Scroll if item is not fully visible
        if (itemLeft < scrollLeft) {
          controlBoxRef.current.scrollTo({
            left: itemLeft,
            behavior: 'smooth',
          });
        } else if (itemLeft + itemWidth > scrollLeft + boxWidth) {
          controlBoxRef.current.scrollTo({
            left: itemLeft + itemWidth - boxWidth,
            behavior: 'smooth',
          });
        }
      }
    }

    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match CSS transition duration
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === maxItems - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex, 'right');
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? maxItems - 1 : currentIndex - 1;
    goToSlide(prevIndex, 'left');
  };

  // Get class names for view items based on position
  const getViewItemClass = (index: number) => {
    const classes = ['ladi-gallery-view-item'];
    
    if (index === currentIndex) {
      classes.push('selected');
    } else if (index === (currentIndex + 1) % maxItems) {
      classes.push('next');
    } else if (index === (currentIndex - 1 + maxItems) % maxItems) {
      classes.push('prev');
    }

    return classes.join(' ');
  };

  // Get class names for control items
  const getControlItemClass = (index: number) => {
    const classes = ['ladi-gallery-control-item'];
    if (index === currentIndex) {
      classes.push('selected');
    }
    return classes.join(' ');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [currentIndex, isTransitioning]);

  return (
    <div id="SECTION8" className="ladi-section">
      <div className="ladi-section-background ladi-lazyload" />
      <div className="ladi-container">
        <div id="IMAGE25" className="ladi-element">
          <div className="ladi-image">
            <div className="ladi-image-background ladi-lazyload" />
          </div>
        </div>
        <div
          id="GALLERY1"
          className="ladi-element"
          data-max-item={maxItems}
          data-current={currentIndex}
        >
          <div className="ladi-gallery ladi-gallery-bottom">
            <div className="ladi-gallery-view" style={{ cursor: 'pointer' }}>
              <div
                className="ladi-gallery-view-arrow ladi-gallery-view-arrow-left"
                onClick={prevSlide}
                role="button"
                aria-label="Previous image"
              />
              <div
                className="ladi-gallery-view-arrow ladi-gallery-view-arrow-right"
                onClick={nextSlide}
                role="button"
                aria-label="Next image"
              />
              {[...Array(maxItems)].map((_, index) => (
                <div
                  key={index}
                  className={getViewItemClass(index)}
                  data-index={index}
                  onClick={nextSlide}
                />
              ))}
            </div>
            <div className="ladi-gallery-control">
              <div className="ladi-gallery-control-box" ref={controlBoxRef}>
                {[...Array(maxItems)].map((_, index) => (
                  <div
                    key={index}
                    className={getControlItemClass(index)}
                    data-index={index}
                    onClick={() => goToSlide(index)}
                    role="button"
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <div
                className={`ladi-gallery-control-arrow ladi-gallery-control-arrow-left ${
                  currentIndex === 0 ? 'opacity-0' : ''
                }`}
                onClick={prevSlide}
                role="button"
                aria-label="Previous image"
              />
              <div
                className={`ladi-gallery-control-arrow ladi-gallery-control-arrow-right ${
                  currentIndex === maxItems - 1 ? 'opacity-0' : ''
                }`}
                onClick={nextSlide}
                role="button"
                aria-label="Next image"
              />
            </div>
          </div>
        </div>
        <div id="HEADLINE122" className="ladi-element ladi-animation-hidden">
          <h2 className="ladi-headline ladi-lazyload">
            Từng tấm ảnh là một lát cắt thời gian đầy cảm xúc – tất cả hòa quyện
            tạo nên bản giao hưởng ngọt ngào của tình yêu, niềm vui và những kỷ
            niệm mà chúng ta sẽ mãi nâng niu suốt cuộc đời.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Slider;