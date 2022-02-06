import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Topbar from "./components/topbar/Topbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {

  const { user } = useContext(Context)

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
