import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GET_PROFILE } from "../../redux/actions/user";

const Gallery = (props) => {

  const [profile, setProfile] = useState();
  
  const getProfile = () => {
    if(props.profile.id === '') {
      props.GET_PROFILE((data) => { setProfile(data) }, (e) => console.log({ e }));
    } else {
      setProfile(props.profile);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <section className="container">
          <div className="row">
            <section className="col-lg-9">
              <p>GALLERY </p>
             <p>{JSON.stringify(profile)} </p>
            </section>
          </div>
      </section>
    </>
  );
};
const mapStateToProps = ({profile}) => {
  return {
    profile,
  };
};

export default connect(mapStateToProps, {GET_PROFILE})(Gallery);
