import Image from "next/image";

// top right image adjustments here , img increases size with screen size
const TopRightImg = () => {
  return (
  <div className='absolute  right-0 top-0 z-10 w-[800px] xl:w-[900px] opacity-60'>
    <Image src='/tright.png' width={900} height={900} alt=''/>
  </div>
  );
};

export default TopRightImg;