import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { X } from "lucide-react";

const ProjectModal = ({ isOpen, onClose, slides }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-[#000000db] bg-opacity-60 z-50 flex justify-center items-center p-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-[80%] relative max-w-2xl"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={onClose} 
              className="absolute top-0.5 right-0.5 text-white dark:text-white hover:scale-105 bg-gray-300 z-10 p-2 rounded-full"
            >
              <X />
            </button>
            <Swiper modules={[Navigation]} loop={true} navigation className="rounded-b-lg">
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-4 text-center">
                    <img src={slide.image} alt={`Slide ${idx}`} className="w-full object-cover rounded mb-4" />
                    <p className="text-gray-800 dark:text-white">{slide.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
// This component uses Framer Motion for animations and Swiper for the slider functionality.