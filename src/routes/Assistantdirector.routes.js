import { Route } from "react-router-dom";
import AssistantDirector from "../components/AssistantDirector";
import ListDataAD from "../components/assistantdirector/ListDataAD";
import { PATHS } from "../constants";
import SetupComponentAD from "../components/assistantdirector/SetupAD";
import ListData from "../components/director/ListData";
export const AssistantdirectorRoutes = () => (
    <Route path="/assistantdirector" element={<AssistantDirector />}>
      <Route
      path={PATHS.VERIFY_CREWAD}
      element={
        // ListData component for Verify Crew page
        <ListDataAD
          editButtonConfig="verifyCrew"
          headerText="Crew Details"
          fetchAPI="crew"
          fetchType="GET"
          searchByField="name"
        />
        
      }
    />
       <Route
      path="/assistantdirector/SetupAD"
      element={
        <SetupComponentAD
          paths={{
            "Scenes Setup": PATHS.SCENE_SETUPAD,
            "Character Setup": PATHS.CHARACTER_SETUPAD,
            "Location Setup": PATHS.LOCATION_SETUPAD,
          }}
        />
      }
    />
        <Route
      path={PATHS.SCENE_SETUPAD}
      element={
        // ListData component for Scene Setup page
        <ListDataAD
          editButtonConfig="sceneSetup"
          headerText="Scene Setup"
          fetchAPI="getSceneSetup"
          fetchType="GET"
          searchByField="sceneLocation"
        />
      }
    />
    <Route
      path={PATHS.CHARACTER_SETUPAD}
      element={
        // ListData component for Character Setup page
        <ListDataAD
          editButtonConfig="characterSetup"
          headerText="Character Setup"
          fetchAPI="getCharacterSetup"
          fetchType="GET"
          searchByField="characterName"
        />
      }
    />
     <Route
      path={PATHS.LOCATION_SETUPAD}
      element={
        // ListData component for Location Setup page
        <ListDataAD
          editButtonConfig="locationSetup"
          headerText="Location Setup"
          fetchAPI="getLocationSetup"
          fetchType="GET"
          searchByField="locationName"
        />
      }
    />
      
    </Route>
  ); 