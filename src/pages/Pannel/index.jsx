import React, { useState, useEffect } from "react";
import styles from "./css/index.module.css";

import speakersData from "./data/index.json";
import Modal from "./modal";

import { useParams } from "react-router-dom";
import SpeakerCard from "../../components/speakerCard";

const Speakers = () => {
    const { domain } = useParams();

    const [data, setData] = useState(speakersData);
    const [modalData, seModalData] = useState({});
    const [isModelOpen, setModelModelOpen] = useState(false);
    useEffect(() => {
        setDropDownDefaultState();
        // console.log(domain, "Domain");
    }, [domain]);

    const [selectedDomain, setSelectedDomain] = useState("Select Domain");

    const setDropDownDefaultState = () => {
        switch (domain) {
            case "post-quantum-cryptography":
                setSelectedDomain("Post-Quantum Cryptography");
                filterProgram("Post-Quantum Cryptography");
                break;
            case "advanced-persistent-threats":
                setSelectedDomain("Advanced Persistent Threat");
                filterProgram("Advanced Persistent Threat");
                break;
            case "supply-chain-security":
                setSelectedDomain("Supply Chain Security");
                filterProgram("Supply Chain Security");
                break;
            case "electronic-warfare":
                setSelectedDomain("Electronic Warfare");
                filterProgram("Electronic Warfare");
                break;
            default:
                setSelectedDomain("Select Domain");
                filterProgram("Select Domain");
                break;
        }
    };

    const filterProgram = async (name) => {
        setSelectedDomain(name);
        setData(() => {
            if (name === "Select Domain") {
                return speakersData;
            }
            let data = [];
            speakersData.map((item) => {
                if (item.name === name) {
                    data.push({
                        name: item.name,
                        data: item.data.filter((item) => !item.isNotShowInDomain),
                    });
                }
            });
            return data;
        });
    };

    return (
        <section className={styles.containerWrapper}>
            <div className={styles.heroSection}>
                <div className={styles.containerTitle}>
                    Our Panelist
                </div>
            </div>

            <div className={styles.containerBody}>
                <div className={styles.containerSearchContentBodyItem}>
                    <select value={selectedDomain} className={styles.containerSearchContentDropdown} onChange={(e) => filterProgram(e?.target?.value)}>
                        <option value="Select Domain">All</option>
                        <option value="Electronic Warfare">Mission Rakshak</option>
                        <option value="Post-Quantum Cryptography">Unlocking synergies for greater impact</option>
                        <option value="Supply Chain Security">From Roadblocks to Runways</option>
                        <option value="Advanced Persistent Threat">Evolving Startup Ecosystem</option>

                    </select>
                </div>
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
            </div>

            {isModelOpen && <Modal data={modalData} onClose={() => setModelModelOpen(false)} />}
        </section>
    );
};

export default Speakers;
