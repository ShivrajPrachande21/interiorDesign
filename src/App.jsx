import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/home/aboutMe/About';
import Mywork from './pages/home/mywork/Mywork';
import PdfViewer from './pages/home/mywork/pdfViewer/PdfViewer';
import Contact from './pages/home/contact/Contact';

function App() {
  const [count, setCount] = useState(0);

  const PdfViewerWrapper = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const pdfUrl = params.get('pdf');
    return <PdfViewer pdfUrl={pdfUrl} />;
  };

  const location = useLocation();
  const isPdfViewer = location.pathname === '/view-pdf';

  return (
    <div style={{ backgroundColor: isPdfViewer ? '#F0E7E3' : '#FFF' }}>
    

       
          <Navbar />
          <Home />
          <About />
          <Mywork />
          <Contact/>
      
        <Routes>
        <Route path="/view-pdf" element={<PdfViewerWrapper />} />
     
      </Routes>

    </div>
  );
}

export default App;
