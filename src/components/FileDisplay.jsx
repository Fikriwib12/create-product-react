import React from 'react';

const FileDisplay = ({ file }) => {
  if (!file) {
    return null; //untuk penangangan file
  }

  return (
    <div>
      File Name: {file.name}
    </div>
  );
};

export default FileDisplay;
