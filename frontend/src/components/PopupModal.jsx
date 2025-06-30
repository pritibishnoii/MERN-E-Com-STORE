import { motion, AnimatePresence } from "motion/react";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const PopupModal = ({
  onCancel,
  onConfirm,
  message = "Are you sure you want to delete this user?",
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <motion.div
          className="modal-content"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            minWidth: "300px",
            textAlign: "center",
          }}
        >
          <h3 className="text-md text-pink-600 my-4">{message}</h3>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <button
              onClick={onCancel}
              style={{
                padding: "0.5rem 1.5rem",
                background: "#eee",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "#e74c3c",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              style={{
                padding: "0.5rem 1.5rem",
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Confirm
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupModal;
