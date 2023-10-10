
// export default ResumeBtn;
import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi2';

const ResumeBtn = () => {
  const openResume = () => {

    // resume 
    window.open('/public/resume.png', '_blank');
  };

  return (
    <div className='mx-auto xl:mx-0'>
      <motion.button
        className='w-16 h-16 rounded-full overflow-hidden border-none bg-cover cursor-pointer'
        style={{
          backgroundImage: `url('../public/circletext.png')`,
          backgroundSize: 'cover',
        }}
        onClick={openResume}
        whileTap={{ rotate: 360 }}
      >
        <HiDocumentText className='text-white text-2xl' />
      </motion.button>
    </div>
  );
};

export default ResumeBtn;