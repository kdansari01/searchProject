import React, { useState, useEffect } from "react";
// import Page from "./Page";
import "./style.css";
import SendOfferModal from "./Modal";
import Card from "./Card";
import { Pagination } from "../postProject/Pagination";
import Dropdown from "./Dropdown";
import { ApiSearchProjectChild } from "./ApiSearchProjectChild";

const ApiSearchProject = ({ posts }) => {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(null);
  const [offerModal, setOfferModal] = useState(false);
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
          <Dropdown />
          <table className="">
            <tr className="">
              {headers.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
            {posts.map((ele, ind) => (
              <ApiSearchProjectChild {...ele} />
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
