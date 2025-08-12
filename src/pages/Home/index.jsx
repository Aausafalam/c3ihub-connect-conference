import React from "react";
import styles from "./css/index.module.css";
import KeyAttraction from "./KeyAttraction";
import EventDetails from "./EventDetails";
import SupportedBy from "./SupportedBy";
import { useEffect, useState } from "react";

const images = [
  `${process.env.REACT_APP_BASE_PATH}home/logo/banner.jpeg`,
 



  
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home_wrapper}>
      <section className={styles.container_wrapper}>
        <div className={styles.container}>
          {/* <h1>#connect</h1> */}
          <div className={styles.banner_header}>
            <div className={styles.banner_header_left}>
              <div className={styles.sideimage_logo}>
                <img
                  className={styles.event_image_logo}
                  src={`${process.env.REACT_APP_BASE_PATH}home/logo/logo.png`}
                  alt="Event"
                />
              </div>
              <h1 className={styles.slogan}>
                Where Ideas Spark <strong>Possibilities</strong>
              </h1>
            </div>

            <div className={styles.sideimage}>
              <img
                className={styles.event_image}
                src={images[currentIndex]}
                alt="Event Slideshow"
              />{" "}
            </div>
          </div>

          <div className={styles.banner_footer}>
            <div>
              <div className={styles.about_event}>
                <h2>About The Event</h2>
                <div>
                  <p>
                    Connect 1.0 by C3iHub, IIT Kanpur, is where cybersecurity
                    and deep-tech converge. Over two action-packed days, the
                    event brings together innovators, startups, industry
                    leaders, investors, academics, and policymakers. Expect
                    insightful talks, panel discussions, startup demos, product
                    launches, and investor meetups, all aimed at driving
                    collaboration and building solutions for national digital
                    security. Whether you're a tech enthusiast or
                    decision-maker, Connect 1.0 is your gateway to shaping the
                    future of cybersecurity in India.
                  </p>
                </div>
              </div>
              <div>
                <h2>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6"
                    />
                  </svg>
                  Where
                </h2>
                <p>The Grand New Delhi</p>
              </div>
              <div>
                <h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill="currentColor"
                        d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9m0 9c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M7 3v3m10-3v3"
                      />
                    </g>
                  </svg>
                  When
                </h2>
                <p>August 21-22, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <KeyAttraction />
      <EventDetails />
    </div>
  );
};

export default Home;
