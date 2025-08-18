import React, { Suspense, useEffect, useState } from "react";
import styles from "./css/index.module.css";
import { useParams } from "react-router";
import productLaunch from "./data/productLaunch.json";
import exhibition from "./data/exhibition.json";
import startupPitching from "./data/startupPitching";
import MoreInfoModal from "./modal";
import Modal from "../../components/modal";
const VideoModal = React.lazy(() => import("./components/VideoModal"));

const RDExhibit = () => {
    const { type } = useParams();

    useEffect(() => {
        setData();
        setTabDefaultState();
    }, [type]);

    const [data, setData] = useState([]);
    const [modalContent, setModalContent] = useState({});
    const [showModel, setShowModel] = useState(false);
    const [showVideoPopup, setVideoPopup] = useState(false);
    const toggleModel = () => setShowModel(!showModel);
    const toggleVideoPopup = () => setVideoPopup(!showVideoPopup);
    const [tab, setTab] = useState(1);

    const setTabDefaultState = () => {
        switch (type) {
            case "exhibition":
                setTab(1);
                break;
            case "product-launch":
                setTab(2);
                break;
            case "startup-pitching":
                setTab(3);
                break;
            default:
                setTab(1);
                break;
        }
    };

    return (
        <section className={styles.container_wrapper}>
            <div className={styles.container_sub_title}>
                Explore how start-ups nurtured at C3ihub are shaping the future of cybersecurity. Join us for Live Demonstrations, Product Launch, and Pitching Session that redefine digital safety
            </div>
            <button onClick={toggleVideoPopup} className={styles.playBtn}></button>

            <div className={styles.tab}>
                <p onClick={() => setTab(1)} className={tab === 1 && styles.active}>
                    Exhibition
                </p>
                <p onClick={() => setTab(2)} className={tab === 2 && styles.active}>
                    Product Launch
                </p>
                <p onClick={() => setTab(3)} className={tab === 3 && styles.active}>
                    Startup Pitching
                </p>
            </div>

            {tab === 1 &&
                exhibition.map((section, index) => (
                    <div key={index}>
                        <h3 className={styles.section_name}>{section.name}</h3>
                        <div className={`${styles.grid} ${styles.startup_grid}`}>
                            {section.data.map((item, index) => (
                                <div className={styles.grid_item} key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <img className={styles[`logo_${index + 1}`]} src={`${require(`./images/${section.basePath}/${item.logo}`)}`} alt={item.logo} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            {tab === 2 &&
                productLaunch.map((section, index) => (
                    <div key={index}>
                        <h3 className={styles.section_name}>{section.name}</h3>
                        <div className={`${styles.grid} ${styles.startup_grid}`}>
                            {section.data.map((item, index) => (
                                <div className={styles.grid_item} key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <img className={styles[`logo_${index + 1}`]} src={`${require(`./images/${section.basePath}/${item.logo}`)}`} alt={item.logo} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            {tab === 3 &&
                startupPitching.map((section, index) => (
                    <div key={index}>
                        <h3 className={styles.section_name}>{section.name}</h3>
                        <div className={`${styles.grid} ${styles.startup_grid}`}>
                            {section.data.map((item, index) => (
                                <div className={styles.grid_item} key={index}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <img className={styles[`logo_${index + 1}`]} src={`${require(`./images/${section.basePath}/${item.logo}`)}`} alt={item.logo} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            {showModel && <MoreInfoModal data={modalContent} onClose={toggleModel} />}
            <Modal
                state={showVideoPopup}
                title={"CCETC Startup video"}
                setState={toggleVideoPopup}
                style={{ width: "95%" }}
                bodyContent={
                    <Suspense fallback={<div>Loading video...</div>}>
                        <VideoModal />
                    </Suspense>
                }
            />
        </section>
    );
};

export default RDExhibit;
