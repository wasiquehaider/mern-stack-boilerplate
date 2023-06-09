import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header, Message, Spinner } from "../../../components";
import useUserProfilesHook from "../../../api/profiles";
import useTranscriptsHook from "../../../api/transcripts";
import useAcademicsHook from "../../../api/academics";
import usePaymentsHook from "../../../api/payments";
import { FaPenAlt} from 'react-icons/fa'

const TermOptions = ["Spring 2023", "Fall 2023"];

const AdminPanel = () => {
  const [showModal, setShowModal] = useState(false);
  const [academicsTable, setAcademicsTable] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [gpa, setGpa] = useState("");
  const [grade, setGrade] = useState("");
  const [transcripts, setTranscripts] = useState([]);
  const [currentTranscript, setCurrentTranscript] = useState("");
  const [transcriptStatus, setTranscriptStatus] = useState("");
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState("");
  const [currentStudentDetails, setCurrentStudentDetails] = useState("");
  const handleShowModal = ({grade,courseCode}) => {
    setGrade(grade)
    setCourseCode(courseCode)
    setShowModal(true)
  };
  const handleTranscriptStatusChange = (event) => {
    setTranscriptStatus(event.target.value);
  };
  // ******Payments******
  const [selectedTerm, setSelectedTerm] = useState("");
  const [detailCode, setDetailCode] = useState("");
  const [charge, setCharge] = useState("");
  const [payment, setPayment] = useState("");
  const [balance, setBalance] = useState("");
  const handlePaymentSubmit = () => {
    const payload = {
      stdId: currentStudentDetails.stdId,
      firstName: currentStudentDetails.firstName,
      lastName: currentStudentDetails.lastName,
      term: selectedTerm,
      detailCode,
      charge,
      payment,
      balance,
      programOfStudy: currentStudentDetails.programOfStudy,
    };
    mutateAsyncPost(payload);
    // handle form submission here
  };
  // ******Payments******
const handleGradeSubmit = () => {
  const payload = {
    courseCode:courseCode,
    grade: grade,
  };
  mutateAsyncUpdateAcademic(payload)
}
  const handleTranscriptSubmit = () => {
    const payload = {
      stdId: currentStudentDetails.stdId,
      status: transcriptStatus,
    };
    mutateAsyncUpdate(payload);
  };
  const viewsData = [
    {
      optionValue: "",
      header: "Select Data to update",
      content: <div></div>,
    },
    {
      optionValue: "gpa-and-grades",
      header: "Update GPA and Grades",
      content: (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Description</th>
                <th>Credits</th>
                <th>Grade</th>
                <th>Term</th>
                <th>Edit</th>
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
                  <td>
                  <div className='btn-group'>
                    <button
                      className='btn btn-primary btn-sm rounded-pill'
                      onClick={() => handleShowModal({grade:item.grade, courseCode:item.courseCode})}
                      data-bs-toggle='modal'
                      data-bs-target='#userModal'
                    >
                      <FaPenAlt />
                    </button>

                    
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-3">
            <label htmlFor="gpaInput" className="form-label">
              GPA
            </label>
            <input
              type="text"
              className="form-control"
              id="gpaInput"
              value={gpa}
              placeholder="Enter Gpa"
              onChange={(e) => setGpa(e.target.value)}
            />
          </div>
        </div>
      ),
    },
    {
      optionValue: "payment-details",
      header: "Payment Details",
      content: (
        <div className="container">
          <form onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label htmlFor="term">Term:</label>
              <select
                className="form-control"
                id="term"
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
              >
                <option value="">Select Term</option>
                {TermOptions.map((term) => (
                  <option key={term} value={term}>
                    {term}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="detailCode">Detail Code:</label>
              <input
                type="text"
                className="form-control"
                id="detailCode"
                value={detailCode}
                onChange={(e) => setDetailCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="charge">Charge:</label>
              <input
                type="text"
                className="form-control"
                id="charge"
                value={charge}
                onChange={(e) => setCharge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="payment">Payment:</label>
              <input
                type="text"
                className="form-control"
                id="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="balance">Balance:</label>
              <input
                type="text"
                className="form-control"
                id="balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </div>
          </form>
        </div>
      ),
    },
    {
      optionValue: "transcript-status",
      header: "Transcript Status",
      content: (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Transcript Level</th>
                <th>Transcript Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTranscript && (
                <tr>
                  <td>{`${currentTranscript.firstName} ${currentTranscript.lastName}`}</td>
                  <td>{currentTranscript.email}</td>
                  <td>{currentTranscript.transcriptLevel}</td>
                  <td>{currentTranscript.transcriptType}</td>
                  <td>{currentTranscript.status}</td>
                </tr>
              )}
            </tbody>
          </table>
          <select
            className="form-select mb-3"
            aria-label="Select Student"
            value={transcriptStatus}
            onChange={handleTranscriptStatusChange}
          >
            <option value={""}>Select Status</option>
            <option value={"In Progress"}>In Progress</option>
            <option value={"Completed"}>Completed</option>
          </select>
        </div>
      ),
    },
  ];
  const { getUserProfiles } = useUserProfilesHook({
    page: 1,
    q: "",
  });
  const { getAcademics, updateAcademic } = useAcademicsHook({
    stdId: currentStudent,
  });
  const { data, isLoading, isError, error } = getUserProfiles;
  const {
    data: academicsData,
    isLoading: academicsIsLoading,
    isError: academicsIsError,
    error: academicsError,
  } = getAcademics;
  const { getTranscripts, updateTranscript } = useTranscriptsHook({});
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = getTranscripts;

  const { postPayments } = usePaymentsHook({
    page: 1,
    q: "",
  });
  const {
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
    isSuccess: isSuccessPost,
    mutateAsync: mutateAsyncPost,
  } = postPayments;

  const {
    isLoading: isLoadingUpdate,
    isError: isErrorUpdate,
    error: errorUpdate,
    isSuccess: isSuccessUpdate,
    mutateAsync: mutateAsyncUpdate,
  } = updateTranscript;

  const {
    
    isLoading: isLoadingUpdateAcademic,
    isError: isErrorUpdateAcademic,
    error: errorUpdateAcademic,
    isSuccess: isSuccessUpdateAcademic,
    mutateAsync: mutateAsyncUpdateAcademic,
  } = updateAcademic

  useEffect(() => {
    if (currentStudent.length > 0 && selectedOption === "gpa-and-grades") {
      setTimeout(() => {
        getAcademics.refetch({ stdId: currentStudent });
      }, 300);
    }
  }, [currentStudent, selectedOption]);
  useEffect(() => {
    if (!isLoading && data) {
      const filtered= data.data.filter(item => item.stdId !== 'admin')
      setStudents(filtered);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (!isLoading2 && data2) {
      setTranscripts(data2.data);
    }
  }, [isLoading2, data2]);

  useEffect(() => {
    if (currentStudent) {
      const filtered = transcripts.find(
        (item) => item.stdId === currentStudent
      );
      const filteredStudents = students.find(
        (item) => item.stdId === currentStudent
      );
      setCurrentTranscript(filtered);
      setCurrentStudentDetails(filteredStudents);
    }
  }, [currentStudent, transcripts]);

  useEffect(() => {
    if (!academicsIsLoading && academicsData) {
      setAcademicsTable(academicsData.data);
    }
  }, [academicsIsLoading, academicsData]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const selectedView = viewsData.find(
    (view) => view.optionValue === selectedOption
  );

  const handleStudentChange = (event) => {
    setCurrentStudent(event.target.value);
  };

  const formCleanHandler = () => {
    setSelectedTerm("");
    setDetailCode("");
    setCharge("");
    setPayment("");
    setBalance("");
    setSelectedOption("");
    setTranscriptStatus("")
  };

  useEffect(() => {
    if (isSuccessPost || isSuccessUpdate) {
      setTimeout(() => {
        getTranscripts.refetch();
      }, 300);
      formCleanHandler()}
  }, [isSuccessPost, isSuccessUpdate]);

  useEffect(() => {
    if (isSuccessUpdateAcademic) {
      setShowModal(false)
      setTimeout(() => {
        getAcademics.refetch({ stdId: currentStudent});
      }, 300);
      formCleanHandler()}
  }, [isSuccessUpdateAcademic]);

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
      {isError2 && <Message variant="danger">{error2}</Message>}
      {academicsIsError && <Message variant="danger">{academicsError}</Message>}
      {isErrorPost && <Message variant="danger">{errorPost}</Message>}
      {isErrorUpdate && <Message variant="danger">{errorUpdate}</Message>}
      {isErrorUpdateAcademic && <Message variant="danger">{errorUpdateAcademic}</Message>}
      {isSuccessPost && (
        <Message variant="success">
          Student Payment has been added successfully.
        </Message>
      )}
      {isSuccessUpdate && (
        <Message variant="success">
          Transcript status has been updated successfully.
        </Message>
      )}
      {isSuccessUpdateAcademic && (
        <Message variant="success">
          Grade has been updated successfully.
        </Message>
      )}
      <Header heading="Admin Panel" showCollapse={true}>
        {isLoading || isLoading2 || isLoadingPost || isLoadingUpdate || isLoadingUpdateAcademic ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 ">
                <select
                  className="form-select mb-3"
                  aria-label="Select Student"
                  value={currentStudent}
                  onChange={handleStudentChange}
                >
                  <option value={""}>Select Student</option>
                  {students?.map((student, i) => (
                    <option
                      key={i}
                      value={student.stdId}
                    >{`${student.firstName} ${student.lastName}`}</option>
                  ))}
                </select>
              </div>
            </div>
            {currentStudent && (
              <div>
                <div className="row mt-4 justify-content-center">
                  <div className="col-md-6">
                    <select
                      className="form-select mb-3"
                      aria-label="Select view"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      {viewsData.map((view) => (
                        <option key={view.optionValue} value={view.optionValue}>
                          {view.header}
                        </option>
                      ))}
                    </select>
                    <div>{selectedView.content}</div>
                  </div>
                </div>

                {selectedOption && (
                  <div className="form-group text-center">
                    <button
                      onClick={() => {
                        selectedView.optionValue === "payment-details"
                          ? handlePaymentSubmit()
                          : selectedView.optionValue === "transcript-status"
                          ? handleTranscriptSubmit()
                          : () => {};
                      }}
                      type="submit"
                      className="btn btn-primary bg-skyBlue mb-5"
                    >
                      Update Data
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </Header>
      <EditModal
        showModal={showModal}
        setShowModal={setShowModal}
        grade={grade}
        setGrade={setGrade}
        submitHandler={handleGradeSubmit}
        isLoading={isLoadingUpdateAcademic}
      />
    </>
  );
};

export default AdminPanel;

const EditModal = ({
  showModal,
  setShowModal,
  grade,
  setGrade,
  submitHandler,
  isLoading = false
}) => {
 
  return (
    <div
      className="modal"
      data-bs-backdrop='static'
      tabIndex="-1"
      role="dialog"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Values</h5>
            <button
              type="button"
              className="close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="grade" className="form-label">
                Grade
              </label>
              <input
                type="text"
                className="form-control"
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button onClick={submitHandler} type="button" className="btn btn-primary">
            {isLoading  ? (
            <span className='spinner-border spinner-border-sm' />
          ) : (
            'Update Grade'
          )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


