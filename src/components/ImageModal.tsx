const ImageModal = ({ img, onClose }: { img: string; onClose: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-sm lg:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img} alt="graphic design" />
      </div>
    </div>
  );
};

export default ImageModal;
