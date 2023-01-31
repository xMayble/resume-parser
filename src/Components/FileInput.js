import React, { useState } from 'react';

function FileInput() {
    const [file, setFile] = useState(null);

    const handleFileUpload = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div>
            <label htmlFor='file-upload'>
                <button>Upload Resume</button>
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