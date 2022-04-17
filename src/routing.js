import React, { useContext, useEffect } from "react";
import "./App.css";
import { RouterList, AuthRouterList } from "./router";

import { UserContext } from "./App";
import MainLayout from "./mainlayout";
import { useHistory, Route, Router, Switch } from "react-router-dom";
import Authlayout from "./authlayout";

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
    <Router history={history}>
      <Switch>
        {AuthRouterList.map((i, index) => (
          <Route
            exact={i.exact}
            key={index}
            path={i.path}
            render={(props) => (
              <Authlayout history={props.history}>
                <i.component {...props} />{" "}
              </Authlayout>
            )}
          />
        ))}

        {RouterList.map((i, index) => (
          <Route
            exact={i.exact}
            key={index}
            path={i.path}
            render={(props) => (
              <MainLayout history={props.history}>
                <i.component {...props} />{" "}
              </MainLayout>
            )}
          />
        ))}

        {/* <Route path="/pagenotfound" component={Pagenotfound} />
      <Redirect from="*" to="/pagenotfound" /> */}
      </Switch>
    </Router>
  );
};

export default Navigation;
