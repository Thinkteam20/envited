import React from "react";
import styles from "./create.module.css";
import { useRef } from "react";
import Image_File_Input from "../../components/image_file_input/image_File_Input";
import { useNavigate } from "react-router-dom";
import partyImg from "../../assets/party.png";

const CreatePage = ({ eventCards, editEvent }) => {
    const navigate = useNavigate();
    const formRef = useRef();
    const eventNameRef = useRef();
    const hostNameRef = useRef();
    const startTimeRef = useRef();
    const endTimeRef = useRef();
    const eventPhotoRef = useRef();

    const { eventName, hostName, sTime, eTime, location, img } = eventCards;

    const onChange = () => {
        const NewEvent = {
            eventName: eventNameRef.current.value,
            hostName: hostNameRef.current.value,
            sTime: null,
            eTime: null,
            location: null,
            img: null,
        };
        editEvent(NewEvent);
        // console.log(eventNameRef.current.value);
    };

    const onFileChange = (file) => {
        editEvent({
            ...eventCards,
            img: file,
        });
    };
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img src={partyImg} alt='' className={styles.party_img} />
                <h1>Create your events!</h1>
                <form className={styles.form}>
                    <label htmlFor=''>Event name</label>
                    <input ref={eventNameRef} type='text' onChange={onChange} />
                    <label htmlFor='' ref={hostNameRef}>
                        Host name
                    </label>
                    <input ref={hostNameRef} type='text' onChange={onChange} />
                    <label htmlFor=''>Start time/date</label>
                    <input type='time' ref={startTimeRef} onChange={onChange} />
                    <label htmlFor=''>End time/date</label>
                    <input type='time' ref={endTimeRef} onChange={onChange} />
                    <label htmlFor=''>Location</label>
                    <input type='text' onChange={onChange} />
                    <label htmlFor=''>Event photo</label>
                    <div className={styles.fileInput}>
                        <Image_File_Input name={eventCards.img} />
                    </div>
                </form>
                <button
                    onClick={() => {
                        navigate("/event");
                    }}
                >
                    Submit
                </button>
            </div>
        </section>
    );
};

export default CreatePage;
