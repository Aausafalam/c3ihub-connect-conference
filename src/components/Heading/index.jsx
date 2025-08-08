import styles from "./css/index.module.css";

const Heading = ({ title }) => {
    return (
        <div className={styles.heading}>
            <h1>{title}</h1>
        </div>
    );
};

export default Heading;
