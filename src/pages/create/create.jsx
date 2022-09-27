import React from "react";
import styles from "./create.module.css";
import { useRef } from "react";

const CreatePage = (props) => {
    const formRef = useRef();
    const nameRef = useRef();

    const onChange = () => {};
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>Create your events!</h1>
                <img src='' alt='' />
                <form className={styles.form} ref={formRef}>
                    <label htmlFor=''>Event name</label>
                    <input ref={nameRef} type='text' onChange={onChange} />
                    <label htmlFor=''>Host name</label>
                    <input ref={nameRef} type='text' onChange={onChange} />
                    <label htmlFor=''>Start and End time/date</label>
                    <label htmlFor=''>Location</label>
                    <input ref={nameRef} type='text' onChange={onChange} />
                    <label htmlFor=''>Event photo</label>
                    <div className={styles.fileInput}>
                        <input type='text' />
                        <button>add photo on your event🎉</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreatePage;
