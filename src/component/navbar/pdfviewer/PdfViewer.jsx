import React from 'react'
import { Document, Page } from 'react-pdf';


function PdfViewer() {
  return (
    <div>     <Document file={file}>
    <Page pageNumber={1} />
</Document></div>
  )
}

export default PdfViewer

