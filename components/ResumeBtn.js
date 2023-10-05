// next 
// import Image from 'next/image';
// import Link from  'next/link';

// import {HiDocumentText} from 'react-icons/hi2';

// const ResumeBtn = () => {
//   return (
//     <div className='mx-auto xl:mx-0'>
//       <Link href='/path/to/your/resume.pdf' download>
//         <div className='w-16 h-16 bg-[#41809d] rounded-full flex items-center justify-center text-white cursor-pointer'>
//           <span className='text-xl'>
//             <i className=''>
//               <HiDocumentText />
//             </i>
//           </span>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ResumeBtn;
import { motion } from 'framer-motion';
import { HiDocumentText } from 'react-icons/hi2';

const ResumeBtn = () => {
  const openResume = () => {
    // Replace 'your_resume.png' with the actual path to your resume image
    window.open('../public/resume.png', '_blank');
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