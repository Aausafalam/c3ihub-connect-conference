import React, { useState } from "react";
import styles from "./css/index.module.css"; // Add some basic styling

const Modal = ({ state, title, bodyContent, setState, style }) => {
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //   setIsOpen(state)
    // }, [state])

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div onClick={() => setState(false)} className={styles.Modal}>
            {state && (
                <div className={styles.modalOverlay}>
                    <div onClick={(event) => event.stopPropagation()} className={styles.modalContent} style={style}>
                        <div className={styles.modalHeader}>
                            <h2>{title}</h2>
                        </div>
                        <div className={styles.modalBody}>
                            <p>{bodyContent}</p>
                        </div>
                        <div className={styles.modalFooter}>
                            <button
                                className={styles.modalFooterButton}
                                onClick={() => {
                                    setState(false);
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
