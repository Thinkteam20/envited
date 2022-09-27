import React from "react";
import styles from "./event.module.css";
import eventImg from "../../assets/event-img.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";

const EventPage = ({ eventCards }) => (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={[styles.container__left, styles.boxes].join(" ")}>
                <div className={styles.left__titles}>
                    {Object.keys(eventCards).map((item, key) => {
                        <h1 key={key}>{item.eventName}</h1>;
                    })}
                    <p>
                        Hosted by <strong>Elysia</strong>{" "}
                    </p>
                </div>
                <div className={styles.left__container}>
                    <div className={styles.left__details}>
                        <img src={icon1} alt='' />
                        <div className={styles.details__text}>
                            <h3>18 August 6:00PM</h3>
                            <h3> Suburb, State, Postcode</h3>
                        </div>
                    </div>
                    <div className={styles.left__details}>
                        <img src={icon2} alt='' />
                        <div className={styles.details__text}>
                            <h3>18 August 6:00PM</h3>
                            <h3> Suburb, State, Postcode</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={[styles.container__right, styles.boxes].join(" ")}>
                <img src={eventImg} alt='' />
            </div>
        </div>
    </section>
);

export default EventPage;
