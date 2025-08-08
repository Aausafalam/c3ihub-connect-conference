import React from "react";
import styles from "./css/index.module.css";
import data from "./data/index.json";
import { Link } from "react-router-dom";
import Heading from "../../../components/Heading";

const KeyAttraction = () => {
  return (
    <section className={styles.container_wrapper}>
      <div className={styles.container}>
        <Heading title="KEY ATTRACTIONS" />
        <div className={styles.body}>
          <div className={styles.grid}>
            {data.map((item, index) => (
              <div>
                <div key={item.name + index} className={styles.grid_item}>
                  <div className={styles.logo}>
                    <img
                      src={`${require(`./images/${item.image}`)}`}
                      alt={item.name}
                    />
                  </div>
                  <h3>{item.name}</h3>
                  <p className={styles.info}>{item.info}</p>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAttraction;
