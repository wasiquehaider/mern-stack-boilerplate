import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header, Message, Spinner } from "../../components";
import "./styles.css";
import useProfilesHook from "../../api/profiles";
import useAcademicsHook from "../../api/academics";

const MyAcademics = () => {
  const [stdId, setStdId] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [college, setCollege] = useState("");
  const [programOfStudy, setProgramOfStudy] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [concentration, setConcentration] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [currentGPA, setCurrentGPA] = useState("");
  const [academicsTable, setAcademicsTable] = useState([]);
  const { getProfile } = useProfilesHook({
    page: 1,
    q: "",
    limit: 25,
  });
  const { getAcademics } = useAcademicsHook({
    stdId: stdId,
  });
  const { data, isLoading, isError, error } = getProfile;
  const {
    data: academicsData,
    isLoading: academicsIsLoading,
    isError: academicsIsError,
    error: academicsError,
  } = getAcademics;

  useEffect(()=> {
    if(stdId.length > 0){
      setTimeout(() => {
        getAcademics.refetch({ stdId: stdId })  
      }, 300);
    }
  },[stdId])

  useEffect(() => {
    if (!isLoading && data) {
      setStdId(data.stdId);
      setAcademicLevel(data.academicLevel);
      setCollege(data.college);
      setProgramOfStudy(data.programOfStudy);
      setGraduationDate(data.graduationDate);
      setConcentration(data.concentration);
      setAdvisor(data.advisor);
      setCurrentGPA(data.currentGPA);
    }
  }, [isLoading, data]);
  useEffect(() => {
    if (!academicsIsLoading && academicsData) {
      setAcademicsTable(academicsData.data);
    }
  }, [academicsIsLoading, academicsData]);
  return (
    <>
      <Helmet>
        <title>My Academics</title>
        <meta property="og:title" content="My Academics" key="title" />
      </Helmet>
      {isError && <Message variant="danger">{error}</Message>}
      {academicsIsError && <Message variant="danger">{academicsError}</Message>}
      <Header heading="My Academics" showCollapse={true}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p>
                  <b>Level:</b> {academicLevel}
                </p>
                <p>
                  <b>College:</b> {college}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <b>Program:</b> {programOfStudy}
                </p>
                <p>
                  <b>Graduation Date:</b> {graduationDate}
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <b>Concentration:</b> {concentration}
                </p>
                <p>
                  <b>Advisor:</b> {advisor}
                </p>
              </div>
            </div>
            <div className="separator"></div>
            <div className="row mt-3">
              <div className="col-md-4">
                <p>
                  <b>Credits Required for Graduation:</b> 30
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <b>Credits Earned:</b> 27
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <b>Current GPA:</b> {currentGPA}
                </p>
              </div>
            </div>
            <div className="separator mb-5 "></div>
            <p className="text-skyBlue fs-7 fw-bold">
              Courses Enrolled/Completed
            </p>
            {academicsIsLoading ? (
              <Spinner />
            ) : (
              <div className="container">
                <div className="col-6 col-sm-12 col-xs-12">
                  <table className="table table-striped table-bordered table-hover">
                    <thead className="bg-light">
                      <tr>
                        <th>Course Code</th>
                        <th>Description</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th>Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      {academicsTable?.map((item, i) => (
                        <tr key={i}>
                          <td>{item.courseCode}</td>
                          <td>{item.courseDescription}</td>
                          <td>{item.credits}</td>
                          <td>{item.grade}</td>
                          <td>{item.term}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </Header>
    </>
  );
};

export default MyAcademics;
