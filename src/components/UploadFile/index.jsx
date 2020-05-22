import React, { Fragment, useState, useContext } from 'react';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';

import { StyledUpload } from './style';
import { storage, updateUserProfileDocument } from '../../firebase/firebase.utils';

const UploadFile = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const { user } = useContext(AuthenticationContext);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = e => {
    e.preventDefault();
    const uploadTask = storage.ref(`profile-pictures/${user.id}`).put(file); // set unique path

    uploadTask.on(
      'state_changed',
      snapshot => {
        //progress function
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('hello, ', downloadURL);

          updateUserProfileDocument(user.id, { photoUrl: downloadURL });
        });
      }
    );
  };

  return (
    <Fragment>
      <StyledUpload>
        <form onSubmit={onSubmit}>
          <div className="uploadfile-wrapper">
            <input type="file" id="file" onChange={onChange} size="10000000" />
            <label className="file-upload" htmlFor="file">
              {filename.length > 0 ? 'Tryck här för att ändra' : 'Välj fil'}
            </label>
            <input type="submit" value="Ladda upp" />
            <br />
          </div>
        </form>
      </StyledUpload>
    </Fragment>
  );
};
export default UploadFile;
