import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GET_POST } from "../../redux/actions/request";
import { GET_LOGIN } from "../../redux/actions/auth";

const PostList = (props) => {
  const [postData, setPostData] = useState("");
  const getPost = () => {
    props.GET_POST(
      (data) => {
        setPostData(data)
      },
      (e) => console.log({ e })
    );
    
  };

  useEffect(() => {
    getPost();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          {Array.isArray(postData) && postData.length > 0
            ? postData.map((item, index) => (
                <div className="col-12 mb-2" key={index}>
                  <div className="card gedf-card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="ml-2">
                            <div className="h5 m-0">{item.userId}</div>
                            <div className="h7 text-muted">{item.userId}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <a className="card-link" href="#">
                        <h5 className="card-title">{item.title}</h5>
                      </a>

                      <p className="card-text">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log("state",JSON.stringify(state,null,2))
  return {
    state,
  };
};

export default connect(mapStateToProps, { GET_POST, GET_LOGIN })(PostList);
