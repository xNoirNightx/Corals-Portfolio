import Image from "next/image";
import TopLeftImgSrc from "/public/tleft.png";

const TopLeftImg = () => {
  return (
    <div className='absolute  left-0 top-0 z-10 w-[400px] xl:w-[600px] opacity-50'>
      <Image src={TopLeftImgSrc} width={700} height={700} alt='' />
    </div>
  );
};

export default TopLeftImg;
