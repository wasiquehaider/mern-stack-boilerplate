// import { useEffect, useState } from 'react'
import { useEffect, useState } from "react";
import { Header, Message } from "../../components";
import { Helmet } from "react-helmet";
import useProfilesHook from "../../api/profiles";
import usePaymentsHook from "../../api/payments";

const UserProfile = () => {
  const { getProfile } = useProfilesHook({
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
  const [selectedTerm, setSelectedTerm] = useState("Spring 2023");
  const { data, isLoading, isError, error } = getProfile;

  const { getPayments } = usePaymentsHook({
    stdId: data?.stdId,
    term: selectedTerm,
  })

  const { data: dataPayments } = getPayments

  console.log({dataPayments})

  const tableData = dataPayments?.data?.map(item => ({
    detailCode:item.detailCode,
    description:item.description,
    charge:item?.charge ?? 0,
    payment:item?.payment ?? 0,
    balance:item?.balance ?? 0,
    
  }))

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

    // setValue("name", !isLoading ? data && data.name : "");
    // setValue("address", !isLoading ? data && data.address : "");
    // setValue("phone", !isLoading ? data && data.phone : "");
    // setValue("bio", !isLoading ? data && data.bio : "");
  }, [isLoading, data]);
  

  function handleTermSelect(event) {
    setSelectedTerm(event.target.value);
  }
  return (
    <>
      <Helmet>
        <title>User Profile</title>
        <meta property="og:title" content="User Profile" key="title" />
      </Helmet>
      {isError && <Message variant="danger">{error}</Message>}
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
              <button type="button" className="btn btn-primary text-center">
                Edit
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
              <option value="Fall 2023">Fall 2021</option>
            </select>
          </div>
        </div>
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
              {
                tableData?.map((row,i) => (
                  <tr key={i}>
                  <td>{row.detailCode}</td>
                  <td>{row.description}</td>
                  <td>${row.charge}</td>
                  <td>${row.payment}</td>
                  <td>${row.balance}</td>
                </tr>
                ))
              }
                
                
              </tbody>
            </table>
          </div>
        </div>
      </Header>
    </>
  );
};

export default UserProfile;
