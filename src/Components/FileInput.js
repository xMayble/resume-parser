import React, { useEffect, useState } from 'react';
import './FileInput.css';

function FileInput() {
    const [file, setFile] = useState(null);
    const fileInputRef = React.useRef(null);

    const handleFileUpload = (event) => {
        console.log('File upload event fired');
        setFile(event.target.files[0]);
        console.log('File Uploaded:', file.name);
    };

    useEffect(() => {
        if (file) {
            console.log('File Uploaded:', file.name);
        }
    }, [file]);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div className='file-input'>
            <button onClick={handleButtonClick}>Upload Resume!</button>
            <input 
                ref={fileInputRef}
                id = "file-upload"
                type = "file"
                style = {{ display: "none" }}
                onChange = {handleFileUpload}
            />
            {file && <p>{file.name}</p>}
        </div>
    );
}

export default FileInput;