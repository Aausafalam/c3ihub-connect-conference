import React, { useState, useEffect } from "react";
import styles from "./css/index.module.css";

import programset, { initialProgramSchedule } from "./data/programs";

import Modal from "../../components/modal";

const Program = () => {
    useEffect(() => {
        setPrograms(initialProgramSchedule);
    }, []);

    const [programs, setPrograms] = useState();

    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [modalContent, setModalContent] = useState({
        title: "",
        state: false,
        bodyContent: "",
    });

    const filterProgram = async (date) => {
        setSelectedDate(date);

        const programTobeFiltered = JSON.parse(JSON.stringify(programset));

        const filteredPrograms = await programTobeFiltered.filter((program) => program.day === date);
        if (filteredPrograms.length == 0) {
            setPrograms(initialProgramSchedule);
            return;
        }
        setPrograms(filteredPrograms);

        console.log(filteredPrograms, "Filtered Programs");
    };

    const handleStateChange = (state) => {
        setModalContent({
            title: "",
            state: false,
            bodyContent: "",
        });
    };

    return (
        <section className={styles.containerWrapper}>
            <div className={styles.heroSection}>
                {/* <h1 className={styles.programmeTitle}>Programme</h1> */}
                <p className={styles.containerTitle}>CONNECT 1.0 Agenda</p>
                

                <div className={styles.containerRegistrationContainer}>{/* <div className={styles.containerRegistrationButton}>Register Now</div> */}</div>
            </div>

    

            <div className={styles.containerBody}>
           
                <div className={styles.containerSearchResults}>
                    {programs?.map((program, index) => {
                        return (
                            <div className={styles.containerSearchResult} key={index}>
                                <div className={styles.resultDuration}>
                                    {program?.time}
                                    <div className={styles.resultDate}>{program?.day}</div>
                                </div>
                                <div className={styles.resultInfo}>
                                    <div className={styles.resultInfoWrapper}>
                                        <div className={styles.resultInfoTitle}>
                                            {typeof program.event === "string" ? (
                                                program.event
                                            ) : (
                                                <ul>
                                                    {program.event.map((item) => (
                                                        <li>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.resultMoreInfo}>
                                        {/* <button
                                                className={styles.moreInfoButton}
                                                onClick={() => {
                                                    const payload = {
                                                        state: true,
                                                        title: program?.event,
                                                        bodyContent: program?.venue,
                                                    };
                                                    console.log(payload, "PAYLOAD");
                                                    setModalContent(payload);
                                                }}
                                            >
                                                More info
                                            </button> */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Modal state={modalContent?.state} title={modalContent?.title} bodyContent={modalContent?.bodyContent} setState={handleStateChange} />
        </section>
    );
};

export default Program;
