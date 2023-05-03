import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthHook from "../../api/auth";
import { useMutation } from "react-query";
import useAuth from "../../hooks/useAuth";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Home = ({ heading, showCollapse = false, showHeading=true, rightText = "", children }) => {
  const [open, setOpen] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { postLogout } = useAuthHook();
  const { mutateAsync } = useMutation(postLogout, {
    onSuccess: () => navigate("/auth/login"),
  });

  const logoutHandler = () => {
    mutateAsync({});
  };

  const user = () => {
    const userInfo = auth?.userInfo;

    return userInfo;
  };

  const handleOptions = () => {
    setOpen(!open);
  };

  return (
    <div>
      {showHeading && <><p className="fs-2 fw-bold p-0 m-0">{`Welcome ${
        user() && user().name
      }!`}</p>
      <p className="text-secondary">
        {`Logged in as ${user() && user().name}. Not you?`}{" "}
        <Link
          to="/auth/login"
          className="nav-link d-inline"
          aria-current="page"
          onClick={logoutHandler}
        >
          Signout
        </Link>
      </p></>}
      {showCollapse && (
        <div>
          <div>
            <div className="collapsible-heading">
              <div className="collapsible-heading" onClick={handleOptions}>
                <p className="fs-5 fw-bold d-flex align-items-center underline-heading">
                  <div className={open ? "arrow-icon collapsed" : "arrow-icon"}>
                    {open ? (
                      <FaChevronRight size={15} />
                    ) : (
                      <FaChevronDown size={15} />
                    )}
                  </div>
                  <span className="text">{heading}</span>
                  {rightText && <span className="small fw-normal" style={{color: "#b49639"}}>{rightText}</span>}
                </p>
              </div>
              <div className={open ? "collapse" : "collapse show p-4"}>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
