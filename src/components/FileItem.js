import React from 'react';

const FileItem = ({ file }) => {
  return (
    <div className="file-item">
      <img src={file.thumbnail} alt={file.name} />
      <p>{file.name}</p>
    </div>
  );
};

export default FileItem;
