import { Route } from "react-router-dom";
import Director from "../components/Director";
import ListData from "../components/director/ListData";
import SetupComponent from "../components/director/Setup";
import SceneInputComponent from "../components/SceneInput";
import ShootDurationComponent from "../components/ShootDuration";
import LocationInputComponent from "../components/LocationInput";
import CharacterInputComponent from "../components/CharacterInput";
import ScheduleOutputComponent from "../components/ScheduleOutput";

export const directorRoutes = () => (
  <Route path="/director" element={<Director />}>
    <Route
      path="/director/verifyCrew"
      element={
        // ListData component for Verify Crew page
        <ListData
          editButtonConfig="verifyCrew"
          headerText="Crew Details"
          fetchAPI="crew"
          fetchType="GET"
          searchByField="name"
        />
      }
    />
    <Route path="/director/sceneInput" element={<SceneInputComponent />} />
    <Route
      path="/director/setup"
      element={
        <SetupComponent
          paths={{
            "Scenes Setup": "/director/scenesSetup",
            "Character Setup": "/director/characterSetup",
            "Location Setup": "/director/locationSetup",
          }}
        />
      }
    />
    <Route
      path="/director/scenesSetup"
      element={
        // ListData component for Scene Setup page
        <ListData
          editButtonConfig="sceneSetup"
          headerText="Scene Setup"
          fetchAPI="getSceneSetup"
          fetchType="GET"
          searchByField="sceneLocation"
        />
      }
    />
    <Route
      path="/director/characterSetup"
      element={
        // ListData component for Character Setup page
        <ListData
          editButtonConfig="characterSetup"
          headerText="Character Setup"
          fetchAPI="getCharacterSetup"
          fetchType="GET"
          searchByField="sceneLocation"
        />
      }
    />
    <Route
      path="/director/locationSetup"
      element={
        // ListData component for Location Setup page
        <ListData
          editButtonConfig="locationSetup"
          headerText="Location Setup"
          fetchAPI="getLocationSetup"
          fetchType="GET"
          searchByField="locationName"
        />
      }
    />
    <Route
      path="/director/shootDuration"
      element={<ShootDurationComponent />}
    />
    <Route
      path="/director/characterInput"
      element={<CharacterInputComponent />}
    />
    <Route
      path="/director/locationInput"
      element={<LocationInputComponent />}
    />
    <Route
      path="/director/scheduleOutput"
      element={<ScheduleOutputComponent />}
    />
  </Route>
);
