import { Route } from "react-router-dom";
import AssistantDirector from "../components/AssistantDirector";
import ListDataAD from "../components/assistantdirector/ListDataAD";
import UploadScript from "../components/assistantdirector/UploadScript";
import { PATHS } from "../constants";
import SetupComponentAD from "../components/assistantdirector/SetupAD";
import AssignCharactersAD from "../components/assistantdirector/AssignedCharactersAD";
import AssignedLocationsAD from "../components/assistantdirector/AssignedLocationsAD";
import AssignAD from "../components/assistantdirector/AssignAD";
import SceneDetailsAD from "../components/assistantdirector/SceneDetailsAD";
import LocationCardList from "../components/director/LocationCardList";
import SelectedCharacterList from "../components/assistantdirector/SelectedCharacterList";
import CastingCall from "../components/assistantdirector/CastingCall";
export const AssistantdirectorRoutes = () => (
  <Route path="/assistantdirector" element={<AssistantDirector />}>
    <Route path="/assistantdirector/UploadScript" element={<UploadScript />} />
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
    />{" "}
    <Route
      path="/assistantdirector/assignCharacter"
      element={
        <SelectedCharacterList
          fetchAPI="ad/search/getCharacters"
          fetchType="GET"
        />
      }
    ></Route>
    <Route
      path="/assistantdirector/assignLocation"
      element={
        <LocationCardList fetchAPI="ad/search/getLocations" fetchType="GET" />
      }
    ></Route>
    <Route
      path="/assistantdirector/castingCall"
      element={<CastingCall />}
    ></Route>
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
          showEditButton={true}
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
          showEditButton={true}
        />
      }
    />
    <Route path={PATHS.EDIT_CHARACTERSAD} element={<AssignCharactersAD />} />
    <Route path={PATHS.EDIT_LOCATIONSAD} element={<AssignedLocationsAD />} />
    <Route path={PATHS.ASSIGNAD} element={<AssignAD />} />
    <Route path={PATHS.SCENE_DETAILSAD} element={<SceneDetailsAD />} />
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
          showEditButton={true}
        />
      }
    />
  </Route>
);
