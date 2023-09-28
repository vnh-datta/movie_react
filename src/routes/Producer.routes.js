import Department from "../components/Producer/Departments";
//import {Dep1,Dep2AndDep3,Dep4AndDep5} from "../components/Producer/Departments";
import Designations from "../components/Producer/Designations";
import AddProduction from "../components/Producer/Add Production";
import AddCrew from "../components/Producer/AddCrew";
import Producer from "../components/Producer";
import { Route } from "react-router-dom";
export const ProducerRoutes = () => (

<Route path="/Producer" element={<Producer/>}>
                <Route path="/Producer/Departments" element={<Department/>}/>
                <Route path="/Producer/Designations" element={<Designations/>}/>
                <Route path="/Producer/AddProduction" element={<AddProduction/>}/>
                <Route path="/Producer/AddCrew" element={<AddCrew/>}/>
                </Route>
)