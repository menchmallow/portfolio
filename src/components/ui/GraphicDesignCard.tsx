const GraphicDesignCard = ({
  img,
  setModalImgSrc,
}: {
  img: string;
  setModalImgSrc: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div onClick={() => setModalImgSrc(img)} className="cursor-pointer">
      <img src={img} alt="Graphic design" />
    </div>
  );
};

export default GraphicDesignCard;
