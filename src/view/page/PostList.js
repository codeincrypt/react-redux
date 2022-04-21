import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { GET_POST } from "../../redux/actions/request";
import { GET_PROFILE } from "../../redux/actions/user";

const PostList = (props) => {
  const [postData, setPostData] = useState("");
  const [profiledata, setProfile] = useState("");
  const getPost = () => {
    props.GET_POST(
      (data) => {
        setPostData(data);
      },
      (e) => console.log({ e })
    );
    props.GET_PROFILE((data) => {
      setProfile(data)
    },
    (e) => {
      setProfile("")
      console.log('GET_PROFILE', { e })
    }
    );
  };

  useEffect(() => {
    getPost();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="container">
        {/* <div className="col-lg-12"> */}
          <div className="row">
            
            <section className="col-lg-9">
              <div className="row">
                {Array.isArray(postData) && postData.length > 0
                  ? postData.map((item, index) => (
                      <div className="mb-2" key={index}>
                        <div className="card gedf-card">
                          <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="ml-2">
                                  <div className="h5 m-0">{item.userId}</div>
                                  <div className="h7 text-muted">
                                    {item.userId}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <Link className="card-link" to="/post/1">
                              <h5 className="card-title">{item.title}</h5>
                            </Link>

                            <p className="card-text">{item.body}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </section>
            <div className="col-lg-3">
              {profiledata === "" || profiledata === undefined ? (
                <h1 className="text-center text-danger">You are not logged In. Login to get your account</h1>
                ) : (
                  <h1 className="text-center text-success">You are logged In {profiledata.name}</h1>
                )}
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log("state",JSON.stringify(state.profile,null,2))
  return {
    state,
  };
};

export default connect(mapStateToProps, { GET_POST, GET_PROFILE })(PostList);
