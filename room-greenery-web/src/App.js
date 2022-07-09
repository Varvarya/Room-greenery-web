import React from 'react';
import AuthPage from "./pages/Auth";
import {Route, Switch} from "react-router-dom";
import Main from "./pages/Home";
import Organizations from "./pages/MainPages/Organizations";
import Devices from "./pages/MainPages/Devices";
import Users from "./pages/MainPages/Users";
import i18n from "i18next";

function App() {
  return (
        <Switch>
            <Route path="/auth">
                <AuthPage />
            </Route>
            <Route path="/">
                <Main />
            </Route>
            <Route path="/organizations">
                <Organizations />
            </Route>
            <Route path="/devices">
                <Devices />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
        </Switch>
  );
}

export default App;
