import { Helmet } from "react-helmet";
import React, { useState } from "react";
import {
  BsFillPersonFill,
  BsFileText,
  BsBookmarks,
  BsPeople,
} from "react-icons/bs";

import { FaChevronDown, FaChevronRight, FaSchool } from "react-icons/fa";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {Header} from "../../../components";

const options = [
  {
    id: 0,
    name: "View My Account",
    icon: <BsFillPersonFill size={100} />,
    route: "/account/profile",
  },
  {
    id: 1,
    name: "Library Services",
    icon: <FaSchool size={100} />,
    route: "/account/library",
  },
  {
    id: 2,
    name: "Request Document",
    icon: <BsFileText size={100} />,
    route: "/account/requestdocument",
  },
  {
    id: 3,
    name: "View My Academics",
    icon: <BsBookmarks size={100} />,
    route: "/account/academics",
  },
  {
    id: 4,
    name: "Faculty & Staff Directory",
    icon: <BsPeople size={100} />,
    route: "/account/staffdirectory",
  },
];

const newsItems = [
  {
    id: 0,
    title: "WELCOME CENTER IS TEMPORARILY CLOSED FOR REPAIRS",
    description:
      "Our Welcome Center is temporarily closed for repairs. All visitors should come to the lobby of the Learning Resource Center (LRC), Monday through Friday, 8:30 a.m. - 5 p.m. for assistance.",
  },
  {
    id: 1,
    title: "Alecea Cardillo Places Eighth at NCAA Indoor Championships",
    description:
      "The Great University's Alecea Cardillo (Plainfield, IL/Plainfield North) finished eighth place in the triple jump at the NCAA DII Indoor Track and Field Championships and earned NCAA All- American honors, the third All-American award of her career, at the Virginia Beach Sports Center on Saturday afternoon.",
  },
  {
    id: 2,
    title: "Swimmers Break School Records at NCAA DII Championships",
    description:
      "This past week, seven The Great University swimmers competed at the NCAA DII Championships in Indianapolis from March 8-11, where they placed 33rd and broke a few school records. * Indicates School Record WEDNESDAY RESULTS Kirill Sidorko (Almaty, Kazakhstan/Almaty International School)",
  },
  {
    id: 3,
    title: "2023 Br. Bernard Rapp, FSC, Lecture is March 24“",
    description:
      "God-World Holism: Science and the Mystery of Matter” will be presented by Dr. Ilia Delio at 2 p.m. March 24 located in the St. Charles Borromeo Convocation Hall on The Great University’s Romeoville campus. The Josephine C. Connelly Chair in Christian Theology at Villanova University is sharing this.",
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  // toggle collapse state
  const handleOptions = () => {
    setOpen(!open);
  };

  const handleNews = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" key="title" />
      </Helmet>
      <Header />
      <div>
        <div className="collapsible-heading" onClick={handleOptions}>
          <p className="fs-5 fw-bold d-flex align-items-center underline-heading">
            <div
              className={isCollapsed ? "arrow-icon collapsed" : "arrow-icon"}
            >
              {isCollapsed ? (
                <FaChevronRight size={15} />
              ) : (
                <FaChevronDown size={15} />
              )}
            </div>
            <span className="text">Choose an option</span>
          </p>
          <div className={open ? "collapse" : "collapse show p-4"}>
            <div className="container-fluid">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                {options.map((item) => (
                  <div
                    className="col"
                    key={item.id}
                    onClick={() => navigate(item.route)}
                  >
                    <div className="card h-100 text-center">
                      <div className="card-body">
                        <div className="icon-container">{item.icon}</div>
                        <h5 className="card-title fs-6">{item.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="collapsible-heading" onClick={handleNews}>
          <p className="fs-5 fw-bold d-flex align-items-center underline-heading">
            <div
              className={isCollapsed ? "arrow-icon collapsed" : "arrow-icon"}
            >
              {isCollapsed ? (
                <FaChevronRight size={15} />
              ) : (
                <FaChevronDown size={15} />
              )}
            </div>
            <span className="text">News & Announcements</span>
          </p>
          <div className={isCollapsed ? "collapse" : "collapse show p-4"}>
            <div className="container">
              <div className="row">
                <div className="col">
                  {newsItems.map((newsItem) => (
                    <div key={newsItem.id}>
                      <a
                        href="#"
                        target="_blank"
                        className="list-group-item list-group-item-action"
                      >
                        <u className="text-skyBlue fs-7 fw-bold">
                          {newsItem.title}
                        </u>
                      </a>
                      <p className="fs-7 fw-bold lh-1 mt-2">
                        {newsItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
