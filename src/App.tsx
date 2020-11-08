import React from "react";
import "./App.scss";
// set up tailwind https://danestves.com/blog/configurar-tailwindcss-con-create-react-app
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import routes from "./config/routes";

// routes can be map in this way if needed

// const appRoutes = routes.map(({ path, component }) => (
//   <Route exact={true} key={path} path={path} component={component} />
// ));

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            {routes.map(({ path, component }) => (
              <Route
                exact={true}
                key={path}
                path={path}
                component={component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
