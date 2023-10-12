import Image from "next/image";
import BottomRightImgSrc from "/public/bright.png";

const BottomRightImg = () => {
  return (
    <div className='fixed bottom-0 right-0 z-0' style={{ opacity: 0.6 }}>
      <Image src={BottomRightImgSrc} width={1200} height={1200} alt='' />
    </div>
  );
};

export default BottomRightImg;