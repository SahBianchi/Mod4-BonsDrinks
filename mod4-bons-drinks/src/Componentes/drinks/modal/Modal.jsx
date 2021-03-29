import React, { useState } from "react";
import styles from "./modal.module.css";

function Modal({ setModal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Header modal</h2>
        </div>

        <div className={styles.modalMain}>
          <p>Conteudo modal</p>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={(e) => setModal(false)}>Close Modal</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
