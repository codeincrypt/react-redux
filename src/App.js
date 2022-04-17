import React, { createContext, useReducer } from "react";
import Navigation from "./routing";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { reducer, initialState } from "./redux/reducers/userReducer";
import { Provider } from "react-redux";
import store from "./redux/store";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
