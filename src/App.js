import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import VideoInfo from './pages/VideoInfo/VideoInfo';
import FaceNotFound from './pages/FaceNotFound/FaceNotFound';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { LivenessQuickStartReact } from './LivenessQuickStartReact';
import '@aws-amplify/ui-react/styles.css';
import awsexports from './aws-exports';

Amplify.configure(awsexports);

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/videoInfo" element={<VideoInfo />} />
            <Route path="/face-not-found" element={<FaceNotFound />} />
            <Route path="/LivenessQuickStartReact" element={<LivenessQuickStartReact />} />
            <Route path="/" element={<Navigate to="/videoInfo" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}