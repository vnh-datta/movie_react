import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Director from './components/Director';
import ResponseContext from './components/ResponseContext';
import AssistantDirector from './components/AssistantDirector';
import VerifyCrew from './components/director/VerifyCrew';
import SceneInputComponent from './components/SceneInput';
import ShootDurationComponent from './components/ShootDuration';
import CharacterInputComponent from './components/CharacterInput';
import LocationInputComponent from './components/LocationInput';
import ScheduleOutputComponent from './components/ScheduleOutput';


function App() {
  const [sceneshootData, setsceneshootData]=useState({});
  return (
    <ResponseContext.Provider value={{ responseData: sceneshootData , setResponseData: (obj) => {
      setsceneshootData(obj);
    } }}>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/director" element={<Director />}>
            <Route path="/dashboard/director/verifyCrew" element={<VerifyCrew />} />
          </Route>
          <Route path="/dashboard/ad" element={<AssistantDirector />} />
        </Route>
        <Route path="/director" element={<Director />}>
          <Route path="/director/verifyCrew" element={<VerifyCrew />} />
          <Route path="/director/sceneInput" element={<SceneInputComponent />} />
          <Route path="/director/shootDuration" element={<ShootDurationComponent />} />
          <Route path="/director/characterInput" element={<CharacterInputComponent />} />
          <Route path="/director/locationInput" element={<LocationInputComponent />} />
          <Route path="/director/scheduleOutput" element={<ScheduleOutputComponent />} />
        </Route>
      </Routes>
    </Router>
    </ResponseContext.Provider>
  );
}

export default App;
