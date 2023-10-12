import Image from "next/image";
import BottomLeftImgSrc from "/public/bleft.png";

const BottomLeftImg = () => {
  return (
    <div className='fixed bottom-0 left-0 z-10 w-[800px] xl:w-[800px] opacity-40'>
      <Image src={BottomLeftImgSrc} width={800} height={800} alt='' />
    </div>
  );
};

export default BottomLeftImg;