import React from "react";
import styles from "./css/index.module.css";

const Modal = ({ onClose, data }) => {
    if (!data) return null;

    return (
        <div onClick={onClose} className={styles.Modal}>
            <div className={styles.modalOverlay}>
                <div onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2>{data.piName}</h2>
                    </div>
                    <div className={styles.modalBody}>
                        <div className={styles.details}>
                            {Object.entries(data).map(([key, value]) => {
                                if (key === "instituteHomePage") return null;
                                return key === "projectDescription" ? (
                                    <p>
                                        <h3>{formatKey(key)}:</h3>
                                        <p className={styles.description}>{value}</p>
                                    </p>
                                ) : (
                                    <p key={key}>
                                        <span>{formatKey(key)}:</span> {value}
                                        {key === "name" && (
                                            <a title="INSTITUTE HOME PAGE" href={data.instituteHomePage} target="_blank" rel="noopener noreferrer">
                                                {" "}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74" />
                                                        <path
                                                            d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        )}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={styles.modalFooterButton} onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatKey = (key) => {
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .replace("Pi", "PI");
};

export default Modal;
