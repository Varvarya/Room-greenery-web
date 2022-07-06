import React from 'react';
import AuthPage from "./pages/Auth";
import {Route, Switch} from "react-router-dom";
import Main from "./pages/Home";
import Organizations from "./pages/MainPages/Organizations";


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
        </Switch>
  );
}

export default App;
