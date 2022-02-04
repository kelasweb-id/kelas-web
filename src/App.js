import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {

  const user = false;

  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>

        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>

        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>

        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
