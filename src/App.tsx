import React from "react";
import "./App.scss";
// set up tailwind https://danestves.com/blog/configurar-tailwindcss-con-create-react-app
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import routes from "./config/routes";
import { ProvideAuth } from "./context/useAuth";

// routes can be map in this way if needed
// const appRoutes = routes.map(({ path, component }) => (
//   <Route exact={true} key={path} path={path} component={component} />
// ));

const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <Navbar />
        <Switch>
          {routes.map(({ path, component }) => (
            <Route exact={true} key={path} path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
