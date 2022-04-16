import React, { createContext, useReducer } from "react";
import Navigation from "./routing";
import "./App.css";

import { reducer, initialState } from "./reducer/userReducer";
import { BrowserRouter } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
