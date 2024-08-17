import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import TypingEffect from './typing';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import resumePDF from './Chandramani_Tiwari_Resume.pdf';

// Import pdfjs from pdfjs-dist
import * as pdfjs from 'pdfjs-dist';

// Set the workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry');

class MyApp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body">
                    <TypingEffect text="Chandramani Tiwari" speed={200} />
                    <div style={{ height: '750px', marginTop: '20px' }}>
                        <Worker>
                            <Viewer fileUrl={resumePDF} />
                        </Worker>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyApp;
