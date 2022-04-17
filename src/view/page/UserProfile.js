import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const UserProfile = (props) => {
  const profile = props.profile;

  // const localSaved = localStorage.getItem('REDUXUSER')
  // console.log(localSaved)
  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="container">
          <div className="row">
            <section className="col-lg-9">
              <p>PROFILE </p>
             <p>{JSON.stringify(profile)} </p>
            </section>
          </div>
      </section>
    </>
  );
};
const mapStateToProps = ({profile}) => {
  console.log("state",JSON.stringify(profile,null,2))
  return {
    profile,
  };
};

export default connect(mapStateToProps)(UserProfile);
