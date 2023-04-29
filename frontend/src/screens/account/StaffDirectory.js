import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../../components";
import "./styles.css";

const StaffDirectory = () => {
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Transcript Level:", location);
    console.log("Transcript Type:", department);
    console.log("Signature:", name);
  };

  return (
    <>
      <Helmet>
        <title>Faculty & Staff Directory</title>
        <meta
          property="og:title"
          content="Faculty & Staff Directory"
          key="title"
        />
      </Helmet>

      <Header heading="Faculty & Staff Directory" showCollapse={true}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6 text-center">
              <form onSubmit={handleSubmit}>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="transcript-level"
                    className="col-sm-3 col-form-label"
                  >
                    Transcript Level:
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control select-bottom-border"
                      id="transcript-level"
                      value={location}
                      onChange={handleLocationChange}
                    >
                      <option value="">Select Transcript Level</option>
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="transcript-type"
                    className="col-sm-3 col-form-label"
                  >
                    Transcript Type:
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control select-bottom-border"
                      id="transcript-type"
                      value={department}
                      onChange={handleDepartmentChange}
                    >
                      <option value="">Select Transcript Type</option>
                      <option value="electronic">Electronic</option>
                      <option value="mail">Mail</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Signature:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control select-bottom-border"
                      id="name"
                      placeholder="Type your full Name"
                      value={name}
                      onChange={handleName}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default StaffDirectory;
