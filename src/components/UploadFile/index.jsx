import React, { Fragment, useState } from 'react';

import { StyledUpload } from './style';
import { storage } from '../../firebase/firebase.utils';
import placeholder from '../../assets/images/placeholder.jpg';

const UploadFile = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = e => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${filename}`).put(file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        //progress function
      },
      error => {
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref('images')
          .child(filename)
          .getDowloadURL()
          .then(url => {
            console.log(url);
          });
      }
    );
  };

  return (
    <Fragment>
      <StyledUpload>
        <form onSubmit={onSubmit}>
          <div className="uploadfile-wrapper">
            <input type="file" id="file" onChange={onChange} />
            <label className="file-upload" htmlFor="file">
              {filename.length > 0 ? 'Tryck här för att ändra' : 'Välj fil'}
            </label>
            <input type="submit" value="Ladda upp" />
            <br />
          </div>
          {filename}
        </form>
        <div className="placeholder-wrapper">
          <img className="placeholder" src={filename.url || placeholder} alt="uploaded" />
          <br />
          {file.length > 0 ? <button>Byt till denna profilbild</button> : 'Här är en exempel bild'}
        </div>
      </StyledUpload>
    </Fragment>
  );
};
export default UploadFile;
