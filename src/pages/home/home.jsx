import React from "react";
import styles from "./home.module.css";
import homeLeftImg from "../../assets/home-img.png";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div
                    className={[styles.container__leftbox, styles.boxes].join(
                        " "
                    )}
                >
                    <img src={homeLeftImg} alt='' />
                </div>
                <div
                    className={[styles.container__rightbox, styles.boxes].join(
                        " "
                    )}
                >
                    <div>
                        <h1>Imagine if</h1>
                        <h1 className={styles.rightbox__socialtext}>
                            Snapchat
                        </h1>
                        <h1>had events.</h1>
                    </div>
                    <p>
                        Easily host and share events with your friends across
                        any social media.
                    </p>
                </div>
                <div
                    className={[styles.buttonContainer, styles.boxes].join(" ")}
                >
                    <button
                        className={styles.button}
                        onClick={() => {
                            navigate("/create");
                        }}
                    >
                        {" "}
                        <span>🎉</span> Create my event
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
