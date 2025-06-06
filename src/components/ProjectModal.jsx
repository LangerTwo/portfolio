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
      >
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-hidden relative flex flex-col"
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          exit={{ scale: 0.8 }}
        >
          <button 
            onClick={onClose} 
            className="absolute top-2 right-4 text-white dark:text-black hover:text-black hover:border hover:border-black hover:scale-105 bg-[#000000db] dark:bg-[#ffffffdb] hover:bg-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white dark:hover:border-2 z-10 p-2 rounded-full hover:transition-transform duration-200 ease-in-out hover:shadow-lg"
          >
            <X />
          </button>
      
          <div className="flex-1">
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation
              className="rounded-b-lg"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="p-4 flex flex-col h-full">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      {slide.title}
                    </h2>
                    <img 
                      rel="preload"
                      src={slide.image} 
                      alt={`Slide ${idx}`} 
                      className="w-full max-h-60 md:max-h-80 object-contain rounded mb-4 mx-auto"
                    />
                    <div className="flex flex-col gap-1 overflow-x-hidden overflow-y-scroll h-64">
                      {Array.isArray(slide.text) ? (
                        slide.text.map((paragraph, idx) => (
                          <p key={idx} className="mb-2 text-gray-800 dark:text-white text-sm md:text-base ">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-800 dark:text-white text-sm md:text-base">{slide.text}</p>
                      )}
                    </div>      
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </motion.div>
      
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
// This component uses Framer Motion for animations and Swiper for the slider functionality.