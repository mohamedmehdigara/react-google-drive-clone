import React from 'react';
import FileItem from './FileItem';
import { Carousel } from 'react-responsive-carousel';


const FileList = ({ files }) => {
  return (
    <div className="file-list">
        <Carousel>
      {files.map(file => (
        <FileItem key={file.id} file={file} />
      ))}
      </Carousel>
    </div>
  );
};

export default FileList;
