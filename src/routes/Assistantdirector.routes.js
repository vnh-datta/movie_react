import { Route } from "react-router-dom";
import AssistantDirector from "../components/AssistantDirector";
import ListDataAD from "../components/assistantdirector/ListDataAD";
import UploadScript from "../components/assistantdirector/UploadScript";
import { PATHS } from "../constants";
export const AssistantdirectorRoutes = () => (
    <Route path="/assistantdirector" element={<AssistantDirector />}>
      <Route path="/assistantdirector/UploadScript" element={<UploadScript/>}/>
      <Route
      path={PATHS.VERIFY_CREWAD}
      element={
        // ListData component for Verify Crew page
        <ListDataAD
          // editButtonConfig="verifyCrewad"
          headerText="Crew Details"
          fetchAPI="crew"
          fetchType="GET"
          searchByField="name"
        />
        
      }
    />
      
    </Route>
  ); 