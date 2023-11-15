import React, { useState } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./configs/theme";
import Main from "./Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Form from "./components/Form";
import Menu from "./components/Menu";
import Results from "./components/Results";
import Graphs from "./components/Graphs";

/**
 * Main point of rendering for the interactive web page
 * @returns
 */
const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={loggedIn ? <Main /> : <Navigate to="/login" />} />
            <Route path="/login" element={loggedIn ? (<Navigate to="/" />) : (<Form parentCallback={callbackFunction} />)} />
            <Route path="/" component={Menu} />
            <Route path="/results" component={Results} element={<Results/>}/>
            <Route path="/graphs" component={Graphs} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
