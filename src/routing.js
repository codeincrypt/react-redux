import React, { useContext, useEffect } from "react";
import "./App.css";
import RouterList from "./router";

import { UserContext } from "./App";
import MainLayout from "./mainlayout";
import { useHistory, Route, Routing, Switch } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const { dispatch } = useContext(UserContext);

  // useEffect(() => {
  //   const admin = localStorage.getItem('lvkartadminlogin');

  //   if (admin) {
  //     dispatch({ type: 'ADMIN', payload: admin });
  //   } else {
  //     history.push('/login');
  //   }
  // }, []);
  return (
    <Switch>
      <MainLayout>
        {RouterList.map(({ path, component }) => (
          <Route exact path={path} component={component} />
        ))}
      </MainLayout>

      {/* <Route path="/pagenotfound" component={Pagenotfound} />
      <Redirect from="*" to="/pagenotfound" /> */}
    </Switch>
  );
};

export default Navigation;
