// import { useEffect, useState } from 'react'
import { useEffect, useState } from "react";
import { Header, Message, Spinner } from "../../components";
import { Helmet } from "react-helmet";
import useProfilesHook from "../../api/profiles";
import usePaymentsHook from "../../api/payments";

const UserProfile = () => {
  const { getProfile, postProfile } = useProfilesHook({
    page: 1,
    q: "",
    limit: 25,
  });
  const [stdId, setStdId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [programOfStudy, setProgramOfStudy] = useState("");
  const [studentStatus, setStudentStatus] = useState(false);
  const [residence, setResidence] = useState("");
  const [advisor, setAdvisor] = useState("");
  const [paymentsTable, setPaymentsTable] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState("Spring 2023");
  const [showModal, setShowModal] = useState(false);
  const [editMailingAddress, setEditMailingAddress] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");

  const { data, isLoading, isError, error } = getProfile;

  const { getPayments } = usePaymentsHook({
    stdId: stdId,
    term: selectedTerm,
  });

  const {
    data: paymentsData,
    isLoading: paymentsIsLoading,
    isError: paymentsIsError,
    error: paymentError,
  } = getPayments;

  const {
    isSuccess,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
    mutateAsync,
  } = postProfile

  useEffect(()=> {
    if(stdId.length > 0 && selectedTerm.length > 0 ){
      setTimeout(() => {
        getPayments.refetch({ stdId: stdId, term: selectedTerm })  
      }, 300);
      
    }
  },[stdId, selectedTerm])

  const handleShowModal = () => {
    setEditMailingAddress(mailingAddress)
    setEditPhoneNumber(phone)
    setShowModal(true)
  };

  const submitHandler = () => {
    mutateAsync({
      mailingAddress: editMailingAddress,
      phone: editPhoneNumber,
    })
  }

  useEffect(() => {
    if (!isLoading && data) {
      setStdId(data.stdId);

      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPermanentAddress(data.permanentAddress);
      setMailingAddress(data.mailingAddress);
      setPhone(data.phone);
      setProgramOfStudy(data.programOfStudy);
      setStudentStatus(data.studentStatus);
      setResidence(data.residence);
      setAdvisor(data.advisor);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (!paymentsIsLoading && paymentsData) {
      const tableData = paymentsData?.data?.map((item) => ({
        detailCode: item.detailCode,
        description: item.description,
        charge: item?.charge ?? 0,
        payment: item?.payment ?? 0,
        balance: item?.balance ?? 0,
      }));
      setPaymentsTable(tableData);
    }
  }, [paymentsIsLoading, paymentsData]);

  function handleTermSelect(event) {
    setSelectedTerm(event.target.value);
  }

  useEffect(()=>{
    setShowModal(false)
  },[isSuccess])
  return (
    <>
      <Helmet>
        <title>User Profile</title>
        <meta property="og:title" content="User Profile" key="title" />
      </Helmet>
      {isErrorPost && <Message variant='danger'>{errorPost}</Message>}
      {isError && <Message variant="danger">{error}</Message>}
      {paymentsIsError && <Message variant="danger">{paymentError}</Message>}
      {isSuccess && (
        <Message variant='success'>User has been updated successfully</Message>
      )}
      <Header heading="My Account" showCollapse={true}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <p className="text-skyBlue fs-7 fw-bold">My Profile</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{`Full Name: ${firstName} ${lastName}`}</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{`Student ID: ${stdId}`}</p>
              <p className="fs-7 fw-bold lh-1 mt-2">
                {`Program of Study: ${programOfStudy}`}
              </p>
              <p className="fs-7 fw-bold lh-1 mt-2">{`Student Status: ${studentStatus}`}</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{`Residence: ${residence}`}</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{`Advisor(s): ${advisor}`}</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <p className="text-skyBlue fs-7 fw-bold">
                Mailing Address and Contact
              </p>
              <p className="fs-7 fw-bold lh-1 mt-2">{mailingAddress}</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{phone}</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{email}</p>
              <button
                onClick={handleShowModal}
                type="button"
                className="btn btn-primary text-center"
                disabled={isLoadingPost}
              >
                {isLoadingPost  ? (
            <span className='spinner-border spinner-border-sm' />
          ) : (
            'Edit'
          )}
              </button>
            </div>
            <div className="col-md-4 col-sm-12 col-12">
              <p className="text-skyBlue fs-7 fw-bold">Permanent Address</p>
              <p className="fs-7 fw-bold lh-1 mt-2">{permanentAddress}</p>
            </div>
          </div>
        </div>
        <p className="text-skyBlue fs-7 fw-bold">Account Summary</p>
        <div className="d-flex flex-row align-items-center mb-4 ">
          <label htmlFor="termSelect" className="mr-3">
            Select Term:
          </label>
          <div className="form-group">
            <select
              className="form-control"
              id="termSelect"
              value={selectedTerm}
              onChange={handleTermSelect}
            >
              <option value="Spring 2023">Spring 2023</option>
              <option value="Fall 2023">Fall 2023</option>
            </select>
          </div>
        </div>
        {paymentsIsLoading ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="col-6">
              <table className="table table-striped table-bordered table-hover">
                <thead className="bg-light">
                  <tr>
                    <th>Detail Code</th>
                    <th>Description</th>
                    <th>Charge</th>
                    <th>Payment</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentsTable?.map((row, i) => (
                    <tr key={i}>
                      <td>{row.detailCode}</td>
                      <td>{row.description}</td>
                      <td>${row.charge}</td>
                      <td>${row.payment}</td>
                      <td>${row.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Header>
      <EditModal
        showModal={showModal}
        setShowModal={setShowModal}
        mailingAddress={editMailingAddress}
        setMailingAddress={setEditMailingAddress}
        phoneNumber={editPhoneNumber}
        setPhoneNumber={setEditPhoneNumber}
        submitHandler={submitHandler}
        isLoading={isLoadingPost}
      />
    </>
  );
};

export default UserProfile;

const EditModal = ({
  showModal,
  setShowModal,
  mailingAddress,
  setMailingAddress,
  phoneNumber,
  setPhoneNumber,
  submitHandler,
  isLoading
}) => {
  return (
    <div
      className="modal"
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
              <label htmlFor="mailingAddress" className="form-label">
                Mailing Address
              </label>
              <input
                type="text"
                className="form-control"
                id="mailingAddress"
                value={mailingAddress}
                onChange={(e) => setMailingAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
            'Update profile'
          )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
