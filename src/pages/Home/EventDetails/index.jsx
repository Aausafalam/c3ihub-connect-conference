import React from "react";
import styles from "./css/index.module.css";

const EventDetails = () => {
    return (
        <section className={styles.container_wrapper}>
            <div className={styles.container}>
                <div className={styles.left_container}>
                    <div className={styles.body}>
                        <img className={styles.logo} src={`${process.env.REACT_APP_BASE_PATH}home/logo/logo.png`} alt="Event" />

                        <div className={styles.infoBlock}>
                            <h2 className={styles.heading}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6"
                                    />
                                </svg>
                                Where
                            </h2>
                            <p className={styles.text}>The Grand New Delhi</p>
                        </div>

                        <div className={styles.infoBlock}>
                            <h2 className={styles.heading}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            fill="currentColor"
                                            d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z"
                                        />
                                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7 3v3m10-3v3" />
                                    </g>
                                </svg>
                                When
                            </h2>
                            <p className={styles.text}>August 21–22, 2025</p>
                        </div>
                    </div>
                </div>

                <div className={styles.right_container}>
                    <div className={styles.footer_map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.015521105951!2d77.14988691175786!3d28.5392531882079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3df4b21eb07%3A0xe51874d2759b0441!2sThe%20Grand%20New%20Delhi!5e0!3m2!1sen!2sin!4v1754650010939!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            class="google_map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
