import React, { useEffect, useState } from "react";
import styles from "./css/index.module.css";
import speakersData from "./data/investor.json";
import SpeakerCard from "../../components/speakerCard";

const PannelDiscussion = () => {

    const [data, setData] = useState(speakersData);
    const [modalData, seModalData] = useState({});
    const [isModelOpen, setModelModelOpen] = useState(false);

    return (
        <section className={styles.container_wrapper}>
            {/* <div className={styles.container_title}>
                PANEL <span>DISCUSSION</span>
            </div>
            <div className={styles.container_sub_title}>
                Join our experts as they engage in insightful discussions on the latest strategies and innovations in <span>cybersecurity and cyber defense</span>
            </div> */}


                   <div className={styles.grid}>
                    {data
                        .flatMap((domains) =>
                            domains.data.map((item) => ({
                                ...item,
                                domainName: domains.name, // Add the domain name to each speaker item
                            }))
                        )
                        .map((item, index) => (
                            <SpeakerCard key={item.name} keyValue={index} program={item} seModalData={seModalData} setModelModelOpen={setModelModelOpen} />
                        
                        ))}
                </div>
           
        </section>
    );
};

export default PannelDiscussion;

// {
//     "expertName": "Col. Ajay Fuloria",
//     "designationAffiliation": "Defence Cyber Agency",
//     "invitedAs": "Panelist"
// },

// {
//     "expertName": "Dr. Prashant Chugh",
//     "designationAffiliation": "Group Leader & Scientist F, C-DOT New Delhi",
//     "invitedAs": "Panelist"
// },
