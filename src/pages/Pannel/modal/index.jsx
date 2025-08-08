import React from "react";
import styles from "./css/index.module.css"; // Add some basic styling

const Modal = ({ data, onClose }) => {
    // useEffect(() => {
    //   setIsOpen(state)
    // }, [state])

    // console.log(state, title, bodyContent)

    return (
        <div className={styles.Modal}>
            <div onClick={() => onClose()} className={styles.modalOverlay}>
                <div onClick={(event) => event.stopPropagation()} className={styles.grid}>
                    <div className={styles.grid_item}>
                        <div className={styles.left}>
                            <img src={`${require(`../speakersPhoto/${data.image}`)}`} alt={data.name} />
                        </div>
                        <div className={styles.right}>
                            <h2>{data.name}</h2>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                       

                            <div className={styles.social_links}>
                                {data.linkdinLink && (
                                    <a className={styles.linkdinIcon} href={data.linkdinLink} rel="noopener noreferrer" target="_blank" style={{ color: "rgb(0, 119, 181)" }}>
                                        <svg
                                            width={"1.5rem"}
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="linkedin"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                            ></path>
                                        </svg>
                                    </a>
                                )}
                                <button className={styles.moreInfoButton} onClick={onClose}>
                                    Back
                                </button>
                            </div>
                        </div>
                        {data.speakerType && <p className={styles.keynote}>{data.speakerType}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
