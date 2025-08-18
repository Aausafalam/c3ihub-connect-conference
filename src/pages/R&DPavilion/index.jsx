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
                Explore how start-ups nurtured at c3ihub are shaping the future of cybersecurity. Join us for Live Demonstrations, Product Launch, and Pitching Session that redefine digital safety
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

// REMOVED DATA FROM R&D JSON FILE

// {
//     "name": "Dr. Sabu M Thampi",
//     "designation": "Professor, School of CSE Coordinator - Connected Systems and Intelligence Lab",
//     "instituteName": "IIITM Kerala",
//     "projectTitle": "Novel Security Framework for Internet of Drones",
//     "instituteHomePage": "https://www.iiitmk.ac.in/"
// },
// {
//     "name": "Dr. Neminath Hubballi",
//     "designation": "Professor, Department of Computer Science and Engineering",
//     "instituteName": "IIT Indore",
//     "projectTitle": "Detecting Collusion and Data Manipulation Attacks in Smart-Grid Networks",
//     "instituteHomePage": "https://www.iiti.ac.in/"
// },
// {
//     "name": "Dr. Rajesh Kumar",
//     "designation": "Assistant Professor, Department of Computer Science & Information Systems",
//     "instituteName": "BITS Pilani (Goa Campus)",
//     "projectTitle": "Predictor and Analyzer of Security Threats (PAST): A Model-based Risk Analysis Framework for Critical Interconnected Infrastructures",
//     "instituteHomePage": "https://www.bits-pilani.ac.in/"
// },
// {
//     "name": "Dr. Harkeerat Kaur",
//     "designation": "Assistant Professor, Department of Computer Science and Engineering",
//     "instituteName": "IIT Jammu",
//     "projectTitle": "Smart Data Agent for Location Management and Privacy",
//     "instituteHomePage": "https://www.iitjammu.ac.in/"
// },
// {
//     "name": "Dr. Deepak Ronanki",
//     "designation": "Assistant Professor, Department of Engineering Design",
//     "instituteName": "IIT Madras",
//     "projectTitle": "Smart Cyber-Physical Security of Electric Powertrains in Autonomous e-Mobility Systems",
//     "instituteHomePage": "https://www.iitm.ac.in/"
// },

// REMOVED DATA FROM STARTUP JSON FILE

// {
//     "logo": "COSGrid.png",
//     "link": "https://www.cosgrid.com/"
// },
// {
//     "logo": "Xpanso.png",
//     "link": "https://www.cloudoptimo.com/"
// }
