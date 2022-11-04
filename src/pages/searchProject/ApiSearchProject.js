import React, { useState } from "react";
// import Page from "./Page";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import "./style.css";
import SendOffer from "./Modal";
import Card from "./Card";
import { Pagination } from "../postProject/Pagination";
import Dropdown from "./Dropdown";

const ApiSearchProject = ({ posts }) => {
  const [page, setPage] = useState(1);
  const headers = [
    "Buyer",
    "Project Details",
    "Price",
    "Delivery Time",
    "Post Day",
    "Offer",
    "Action",
  ];

  return (
    <>
      <div>
        <div className="searchProject card row  d-lg-block d-xl-block d-sm-none d-md-block d-none">
          <Dropdown/>
          <table className="">
            <tr className="">
              {headers.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
            {posts.map((ele, ind) => (
              <tr key={ele.id} className="tableCard mb-2 border ">
                <td>
                  <p><PermIdentityIcon/> {ele.name}</p>
                </td>
                <td className="">Lorem ipsum dolor sit <br/> amet, consectetur <br/>adipiscing elit.</td>
                <td className="">
                 ₹ {Math.floor(Math.random() * 1000)}
                </td>
                <td className="daysAgo ">
                 2 Days ago
                </td>
                <td className="">Active</td>
                <td className=" ">
                  <PermIdentityIcon className="offer" fontSize="10" />
                  <span>{Math.floor(Math.random() * 20)}+</span>
                </td>
                <td>
                  <SendOffer title={"Send Offer"} />
                </td>
              </tr>
            ))}
          </table>
          <div className="justify-content-center d-flex text-center mt-2">
            <Pagination value={page} range={6} onChange={setPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiSearchProject;
