import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./navbar/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import Signup from "./signinFolder/Signup";
import Signin from "./signinFolder/Signin";
import DisplayDashboard from "./userFolder/Display/DisplayDashboard";
import EditDisplay from "./userFolder/Display/EditDisplay";
import BetteryDashboard from "./userFolder/Battery/BetteryDashboard";
import EditBattery from "./userFolder/Battery/EditBattery";
import TouchDashboard from "./userFolder/Touch/TouchDashboard";
import EditTouch from "./userFolder/Touch/EditTouch";
import LcdDashboard from "./userFolder/LCD/LcdDashboard";
import EditLcd from "./userFolder/LCD/EditLcd";
import LogicDashboard from "./userFolder/Logic/LogicDashboard";
import EditLogic from "./userFolder/Logic/EditDisplay";
import RibonDashboard from "./userFolder/Ribon/RibonDashboard";
import EditRibon from "./userFolder/Ribon/EditRibon";
import SpeakerDashboard from "./userFolder/Speaker/SpeakerDashboard";
import EditSpeaker from "./userFolder/Speaker/EditSpeaker";
import RibonSwitch from "./userFolder/Ribon-Switch/RibonSwitchDashboard";
import EditSwitch from "./userFolder/Ribon-Switch/EditRibonSwitch";
import BackShellDashboard from "./userFolder/BackShell/BackShellDashboard";
import EditBackShell from "./userFolder/BackShell/EditBackShell";

import SimTryDashboard from "./userFolder/SimTry/SimTryDashboard";
import EditSimTry from "./userFolder/SimTry/EditSimTry";
import GlassDashboard from "./userFolder/Glass/GlassDashboard";
import EditGlass from "./userFolder/Glass/EditGlass";
import BodyDashboard from "./userFolder/Body/BodyDashboard";
import EditBody from "./userFolder/Body/EditBody";

import OcaDashboard from "./userFolder/Oca/OcaDashboard";
import EditOca from "./userFolder/Oca/EditOca";
import NotFound from "./NotFound";
import UserRoute from "./userFolder/UserRoute";
import Dashboard from "../pages/Dashboard";

// import AdminRoute from "./AdminRoute";
//import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <main className="full_display">
          <Switch>
            {/* <Route exact path="/signup" component={Signup} /> */}
            <Route exact path="/" component={Signin} />
            <Sidebar>
              {/* <UserRoute
                exact
                path="/user/dashboard/dashboard"
                component={<Dashboard />}
              /> */}
              <UserRoute
                exact
                path="/user/dashboard/display"
                component={DisplayDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/display/edit/:id"
                component={EditDisplay}
              />

              <UserRoute
                exact
                path="/user/dashboard/battery"
                component={BetteryDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/battery/edit/:id"
                component={EditBattery}
              />
              <UserRoute
                exact
                path="/user/dashboard/touch"
                component={TouchDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/touch/edit/:id"
                component={EditTouch}
              />

              <UserRoute
                exact
                path="/user/dashboard/lcd"
                component={LcdDashboard}
              />

              <UserRoute
                exact
                path="/user/dashboard/lcd/edit/:id"
                component={EditLcd}
              />
              <UserRoute
                exact
                path="/user/dashboard/logic"
                component={LogicDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/logic/edit/:id"
                component={EditLogic}
              />
              <UserRoute
                exact
                path="/user/dashboard/ribon"
                component={RibonDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/ribon/edit/:id"
                component={EditRibon}
              />
              <UserRoute
                exact
                path="/user/dashboard/speaker-dum"
                component={SpeakerDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/speaker-dum/edit/:id"
                component={EditSpeaker}
              />
              <UserRoute
                exact
                path="/user/dashboard/ribon-switch"
                component={RibonSwitch}
              />
              <UserRoute
                exact
                path="/user/dashboard/ribon-switch/edit/:id"
                component={EditSwitch}
              />
              <UserRoute
                exact
                path="/user/dashboard/back-shell"
                component={BackShellDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/back-shell/edit/:id"
                component={EditBackShell}
              />
              <UserRoute
                exact
                path="/user/dashboard/sim-try"
                component={SimTryDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/sim-try/edit/:id"
                component={EditSimTry}
              />
              <UserRoute
                exact
                path="/user/dashboard/oca"
                component={OcaDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/oca/edit/:id"
                component={EditOca}
              />
              <UserRoute
                exact
                path="/user/dashboard/glass"
                component={GlassDashboard}
              />
              <UserRoute
                exact
                path="/user/dashboard/glass/edit/:id"
                component={EditGlass}
              />

              <UserRoute
                exact
                path="/user/dashboard/body"
                component={BodyDashboard}
              />

              <UserRoute
                exact
                path="/user/dashboard/body/edit/:id"
                component={EditBody}
              />

              {/* <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          /> */}
            </Sidebar>

            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
