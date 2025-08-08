import { ICONS } from "../../Utils/Icons";
import Styles from "./index.module.css";

const SpeakerCard = ({ program, seModalData, setModelModelOpen, keyValue }) => {
    return (
        <div key={keyValue} className={Styles.card}>
            <div className={Styles.cardWrapper}>{program.speakerType && <p className={Styles.keynote_speaker}>{program.speakerType}</p>}</div>
            <div className={Styles.contentWrapper}>
                <div className={Styles.imageWrapper}>
                    <img src={require(`../../pages/Pannel/speakersPhoto/${program?.image}`)} alt="Speaker" className={Styles.speakerImage} />
                </div>
                <div className={Styles.header}>
                    <h3 className={Styles.name}>
                        {program?.name}
                        {program.linkdinLink && (
                            <a href={program.linkdinLink} rel="noopener noreferrer" target="_blank" className={Styles.linkedinLink}>
                                {ICONS.LINKEDIN}
                            </a>
                        )}
                    </h3>
                    <h4 className={Styles.title}>{program.title}</h4>
                    <p title={program?.description} className={Styles.details}>
                        {program?.description}
                    </p>
                </div>

                <div style={{ fontSize: "12px", textAlign: "center", marginTop: "1rem" }}>
                    {
                        program.affiliation && 
                  <>  <span style={{ fontWeight: "bold" }}>Affiliation:</span> {program.affiliation}&nbsp;  </>
                    }
                    {
                        program.domainName && <><span style={{ fontWeight: "bold" }}>| &nbsp;Domain:</span> {program.domainName}</>
                    } 
                </div>
                <div className={Styles.moreInfo}>
                    <button
                        className={Styles.moreInfoButton}
                        onClick={() => {
                            seModalData(program);
                            setModelModelOpen(true);
                        }}
                    >
                        More Info <span>{ICONS.CHEVRON_RIGHT}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard;
