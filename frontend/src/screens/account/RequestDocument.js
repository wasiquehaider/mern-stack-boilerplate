import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../../components";
import "./styles.css";

const notes = [
  "Each transcript costs $8 and will be charged from your student account",
  "Transcripts will be delivered in 5-10 business days",
  "Please visit administrative office to send the transcripts directly to other institutions",
  "Please visit administrative office to order a provisional certificate",
];

const RequestDocument = () => {
  const [transcriptLevel, setTranscriptLevel] = useState("");
  const [transcriptType, setTranscriptType] = useState("");
  const [signature, setSignature] = useState("");
  const [success, setSuccess] = useState(false)

  const handleTranscriptLevelChange = (event) => {
    setTranscriptLevel(event.target.value);
  };

  const handleTranscriptTypeChange = (event) => {
    setTranscriptType(event.target.value);
  };

  const handleSignatureChange = (event) => {
    setSignature(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Transcript Level:', transcriptLevel);
    console.log('Transcript Type:', transcriptType);
    console.log('Signature:', signature);
    setSuccess(true)
  };

  return (
    <>
      <Helmet>
        <title>User Profile</title>
        <meta property="og:title" content="User Profile" key="title" />
      </Helmet>

      <Header heading="Request Documents" showCollapse={true}>
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
                      value={transcriptLevel}
                      onChange={handleTranscriptLevelChange}
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
                      value={transcriptType}
                      onChange={handleTranscriptTypeChange}
                    >
                      <option value="">Select Transcript Type</option>
                      <option value="electronic">Electronic</option>
                      <option value="mail">Mail</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <label
                    htmlFor="signature"
                    className="col-sm-3 col-form-label"
                  >
                    Signature:
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control select-bottom-border"
                      id="signature"
                      placeholder="Type your full Name"
                      value={signature}
                      onChange={handleSignatureChange}
                    />
                  </div>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary bg-skyBlue mb-5">
                    Place Order
                  </button>
                </div>
              </form>
           {success && <div>
              <p className="text-success font-italic">Success!!</p>
              <p className="text-success font-italic">You will receive your transcript in 5-10 business days</p>
              </div>}
            </div>
          </div>
        </div>
        <div className="separator"></div>  
      </Header>
      
      <div>
        <p className="fw-bold" style={{ color: '#a98608' }}>Note:</p>
        <ul>
        {notes.map((note,index) => (
            <li key={index} style={{ color: '#a98608' }}>{note}</li>
        ))}
          
        </ul>
      </div>
      
    </>
  );
};

export default RequestDocument;
