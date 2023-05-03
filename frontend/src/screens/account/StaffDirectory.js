import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Message, Spinner } from "../../components";
import "./styles.css";
import useFacultiesHook from "../../api/faculties";

const StaffDirectory = () => {
  const { getFaculties } = useFacultiesHook({});
  const { data, isLoading, isError, error } = getFaculties;
  const [faculties, setFaculties] = useState([]);
  const [locations, setLocations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [results,setResults] = useState([])
  console.log(results)

  useEffect(() => {
    if (!isLoading && data) {
      const locationSet = new Set(data?.data?.map(({ officeLocation }) => officeLocation));
      const locationsData = Array.from(locationSet);
      const departmentSet = new Set(data?.data?.map(({ college }) => college));
      const departmentsData = Array.from(departmentSet);
      setLocations(locationsData);
      setLocation(locationsData[0]);
      setDepartments(departmentsData);
      setDepartment(departmentsData[0])
      setFaculties( data);
    }
  }, [isLoading, data]);

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
    
    const filtered = faculties?.data?.filter((faculty) => {
      return (
        faculty.officeLocation === location &&
        faculty.college === department &&
        faculty.facultyName.includes(name)
      );
    });
    setResults(filtered)
  };

  console.log(faculties)

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
      {isError && <Message variant="danger">{error}</Message>}
      <Header heading="Faculty & Staff Directory" showCollapse={true}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-6 text-center">
                <form >
                  <div className="form-group row mb-3">
                    <label
                      htmlFor="transcript-level"
                      className="col-sm-3 col-form-label"
                    >
                      Location:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control select-bottom-border"
                        id="transcript-level"
                        value={location}
                        onChange={handleLocationChange}
                      >
                        {locations?.map((location,i) => (
                          <option key={i} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label
                      htmlFor="transcript-type"
                      className="col-sm-3 col-form-label"
                    >
                      Department:
                    </label>
                    <div className="col-sm-9">
                      <select
                        className="form-control select-bottom-border"
                        id="transcript-type"
                        value={department}
                        onChange={handleDepartmentChange}
                      >
                        {departments?.map((department,i) => (
                          <option key={i} value={department}>{department}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="name" className="col-sm-3 col-form-label">
                      Name:
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control select-bottom-border"
                        id="name"
                        placeholder="Enter your search word"
                        value={name}
                        onChange={handleName}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="form-group text-center">
                  <button onClick={handleSubmit} type="submit" className="btn btn-primary bg-skyBlue">
                    Search
                  </button>
                </div>
          </div>
        )}
      </Header>
      <Header heading="Results" showCollapse={true} showHeading={false}>
      <div>{results.map((result,i) => (
        <div key={i}>
        <p className="text-skyBlue fs-7 fw-bold">{result.facultyName}</p>
        <p className="fs-7">{result.Designation}</p>
        <p className="fs-7">{result.phone}</p>
        <p className="fs-7">{result.email}</p>
        </div>
      ))}</div>
      </Header>
    </>
  );
};

export default StaffDirectory;
