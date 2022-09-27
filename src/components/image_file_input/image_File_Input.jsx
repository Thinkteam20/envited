import React, { memo, useRef, useState } from "react";
import styles from "./image_File_Input.module.css";

const Image_File_Input = memo(({ imageUploader, name, onFileChange, url }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState("IMAGE");

    // console.log(fileURL);

    function inputTextName(imgFile) {
        if (imgFile !== null) {
            setIsLoading(false);
            setInputText(imgFile);
        }
        // return inputText;
    }

    const inputRef = useRef();

    function buttonActiveStyle(isURL) {
        switch (isURL) {
            case isURL:
                return styles.active;
            case isURL === null:
                return null;
        }
    }

    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = async (event) => {
        const fileUploaded = event.target.files[0];
        setIsLoading(true);

        const uploaded = await imageUploader.upload(fileUploaded);
        setIsLoading(false);

        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    };
    return (
        <div className={styles.container}>
            <input
                type='file'
                accept='image/*'
                name='file'
                ref={inputRef}
                className={styles.input}
                onChange={onChange}
            />

            {!isLoading && (
                <button
                    className={`${styles.button} ${name && styles.active}`}
                    onClick={onButtonClick}
                >
                    {name || "No file"}
                </button>
            )}
            {isLoading && <div className={styles.loading}></div>}
        </div>
    );
});

export default Image_File_Input;
