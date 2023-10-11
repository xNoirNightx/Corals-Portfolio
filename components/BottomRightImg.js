import Image from "next/image";

const Explosion = () => {
  return (
    <div className='fixed bottom-0 right-0 z-0'>
      <Image src='/explosion.png' width={1200} height={1200} alt='' />
    </div>
  );
};

export default Explosion;
