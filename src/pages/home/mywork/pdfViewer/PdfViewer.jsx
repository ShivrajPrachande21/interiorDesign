import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  return (
    <iframe
      src={pdfUrl}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="PDF Viewer"
    />
  );
};

export default PdfViewer;
