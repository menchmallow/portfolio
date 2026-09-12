import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
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
          <Image src={image} alt={image} width={1920} height={1080} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
