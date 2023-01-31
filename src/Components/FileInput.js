import React, { useState } from 'react';
import './FileInput.css';

function FileInput() {
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
        console.log('File Uploaded:', file.name);
    };

    return (
        <div className='file-input'>
            <label htmlFor='file-upload'>
                Upload Resume
            </label>

            <input 
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