import { useRef, useState } from "react";
import "./carousel.css";

type CarouselProps = {
  images: string[];
  transitionDuration: number;
  height: number;
  width: number;
};
export default function Carousel(props: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const defaultIndex = 0;
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  const handleScroll = (position: number) => {
    if (!ref.current?.scrollTo) return;
    ref.current.scrollTo({
      left: position * props.width,
      behavior: "smooth",
    });
  };

  const prevImage = () => {
    if (currentIndex === 0) return;

    const index = currentIndex - 1;
    setCurrentIndex(index);
    handleScroll(index);
  };

  const nextImage = () => {
    if (currentIndex === props.images.length - 1) return;

    const index = currentIndex + 1;
    setCurrentIndex(index);
    handleScroll(index);
  };
  const showImage = (index: number) => {
    setCurrentIndex(index);
    handleScroll(index);
  };

  return (
    <div className="carousel-image-container">
      <div
        className="carousel-images"
        onScroll={() => {}}
        ref={ref}
        style={
          {
            "--width": `${props.width}px`,
          } as React.CSSProperties
        }
      >
        {props.images.map((image, index) => (
          <img
            key={image + index}
            className="carousel-image"
            alt="..."
            src={image}
            style={{
              width: props.width,
              height: props.height,
            }}
            loading="lazy"
          />
        ))}
      </div>
      <button
        className="carousel-button carousel-button-prev"
        onClick={prevImage}
        aria-label="Previous"
      >
        Prev
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={nextImage}
        aria-label="Next"
      >
        Next
      </button>
      <div className="carousel-dots">
        {props.images.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => showImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
