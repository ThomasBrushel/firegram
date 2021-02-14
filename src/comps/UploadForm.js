import React, {useState} from 'react'

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null)

  const types = ['img/png', 'image/jpeg'];

    const changeHandler = (e) => {
        // Get the first file
        let selected = e.target.files[0];
        console.log(selected)

        if(selected && types.includes(selected.type)) {
          setFile(selected);
          setError('');
        } else {
          setFile(null);
          setError('Please select a file file. (png or jpeg)');
        }
    }

    return (
        <form>
          <input onChange={changeHandler} type="file" /> 
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
          </div>
        </form>
    )
}

export default UploadForm
