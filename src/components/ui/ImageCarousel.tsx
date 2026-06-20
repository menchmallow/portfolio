import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      autoPlay
      infiniteLoop
    >
      {images.map((image: string) => (
        <div>
          <img src={image} alt={image} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
