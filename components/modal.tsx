// components/Modal.js
import { useState } from 'react';
import styles from '../styles/Modal.module.css';
"use client"; // Markiere diese Komponente als Client Component

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null; // Wenn das Modal nicht geöffnet ist, nichts anzeigen
  
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button onClick={closeModal} className={styles.closeButton}>
            X
          </button>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;