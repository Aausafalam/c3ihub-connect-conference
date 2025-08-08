import React from "react";
import styles from "./css/index.module.css";
import Footer from "../../layouts/Footer";
import { ICONS } from "../../Utils/Icons";

const ContactUS = () => {
    return (
        <section className={styles.containerWrapper}>
            <div className={styles.heroSection}>
                <div className={styles.containerTitle}>Contact Us</div>
                <div className={styles.containerSubTitle}>Get in touch with our team for more information.</div>

                <div className={styles.containerBody}>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1097.0578724015138!2d80.230818!3d26.517338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37005f00b821%3A0x9d66cf8a0792edbc!2sTechnopark%20-%20Phase%201%20Building!5e1!3m2!1sen!2sin!4v1724916466400!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className={styles.contactUsDetails}>
                        <div>
                            <div>{ICONS.LOCATION}</div>
                            <div>
                                <p>C3iHub, 2nd Floor,</p>
                                <p>Technopark Phase I, IIT Kanpur</p>
                                <p>Kanpur - 208016</p>
                                <p>Uttar Pradesh, India</p>
                            </div>
                        </div>
                        <div>
                            <div>{ICONS.EMAIL}</div>
                            <div>
                                <p>events@c3ihub.iitk.ac.in</p>
                            </div>
                        </div>
                        <div className={styles.followUs}>
                            <div>
                                <h3>Follow Us on</h3>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/C3iHub.org" rel="noopener noreferrer" target="_blank" class="icon" previewlistener="true">
                                    {ICONS.FACEBOOK}
                                </a>
                                <a href="https://www.instagram.com/c3ihub/?hl=en" rel="noopener noreferrer" target="_blank" class="icon" previewlistener="true">
                                    {ICONS.INSTAGRAM}
                                </a>
                                <a href="https://www.linkedin.com/company/c3i-hub/" rel="noopener noreferrer" target="_blank" class="icon" previewlistener="true">
                                    {ICONS.LINKEDIN}
                                </a>
                                <a href="https://twitter.com/hubc3i?lang=en" rel="noopener noreferrer" target="_blank" class="icon" previewlistener="true">
                                    {ICONS.TWITTER}
                                </a>
                                <a href="https://www.youtube.com/@C3iHub" rel="noopener noreferrer" target="_blank" class="icon" previewlistener="true">
                                    {ICONS.YOUTUBE}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUS;
