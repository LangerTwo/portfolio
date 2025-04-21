// components/ProjectModal.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProjectModal = ({ isOpen, onClose, slides }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-xl w-full relative"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        exit={{ scale: 0.8 }}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-black dark:text-white">✕</button>
        <Swiper modules={[Navigation]} navigation className="rounded-b-lg">
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-4 text-center">
                <img src={slide.image} alt={`Slide ${idx}`} className="w-full h-64 object-cover rounded mb-4" />
                <p className="text-gray-800 dark:text-white">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;