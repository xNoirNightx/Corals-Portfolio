import Image from "next/image";

// top left image adjustments here , img increases size with screen size
const TopLeftImg = () => {
  return (
  <div className='absolute  left-0 top-0 z-10 w-[400px] xl:w-[600px] opacity-50'>
    <Image src='/tleft.png' width={700} height={700} alt=''/>
  </div>
  );
};

export default TopLeftImg;
