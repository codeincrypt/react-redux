import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { GET_LOGIN } from "../../redux/actions/auth";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getLogin = () => {
    if (!email || !password) {
      alert("Please enter a valid data");
    }
    props.GET_LOGIN({ email: email, password: password },
      (data) => {
        console.log('GET_LOGIN', data);
        if (data.isLogin === true) {
          console.log('token', data.token)
          localStorage.setItem("REDUXUSER", data.token);
          history.push('/post');
        }
      },
      (e) => console.log({ e })
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <div className="form-floating mb-3">
                  <label htmlFor="floatingInput">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="floatingPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-dark btn-block btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={getLogin}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state",JSON.stringify(state,null,2))
  return {
    state,
  };
};

export default connect(mapStateToProps, { GET_LOGIN })(Login);
