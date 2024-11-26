import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/auth/Register';
import Home from './pages/Home/Home';
import VideoInfo from './pages/VideoInfo/VideoInfo';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsexports from './aws-exports';
import { LivenessQuickStartReact } from './LivenessQuickStartReact';

Amplify.configure(awsexports);

export default function App() {
  return (
    <ThemeProvider>
    	<Router>
        <div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/videoInfo" element={<VideoInfo />} />
            <Route path="/LivenessQuickStartReact" element={<LivenessQuickStartReact />} />
            <Route path="/" element={<Navigate to="/register" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}