import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
          onClick={onClose} // Schließen, wenn außerhalb geklickt wird
        >
          <motion.div 
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }} // Jetzt funktioniert `exit`
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-xl w-180 relative"
            onClick={(e) => e.stopPropagation()} // Verhindert Schließen beim Klicken ins Modal
          >
            {/* <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
              ✖
            </button> */}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
