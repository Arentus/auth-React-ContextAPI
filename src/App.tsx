import React from "react";
import "./App.scss";
// set up tailwind https://danestves.com/blog/configurar-tailwindcss-con-create-react-app
import "./tailwind.output.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./pages/signIn/SignIn";
import { Home } from "./pages/home/Home";
import { SignUp } from "./pages/signUp/SignUp";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
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
