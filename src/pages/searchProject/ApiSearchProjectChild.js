import React, { useState } from "react";
import SendOfferModal from "./Modal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const ApiSearchProjectChild = ({ id, name }) => {
  const [offerModal, setOfferModal] = useState(false);
  return (
    <tr key={id} className="tableCard mb-2 border ">
      <td>
        <p>
          <PermIdentityIcon /> {name}
        </p>
      </td>
      <td className="">
        Lorem ipsum dolor sit <br /> amet, consectetur <br />
        adipiscing elit.
      </td>
      <td className="">₹ {Math.floor(Math.random() * 1000)}</td>
      <td className="daysAgo ">2 Days ago</td>
      <td className="">Active</td>
      <td className=" ">
        <PermIdentityIcon className="offer" fontSize="10" />
        <span>{Math.floor(Math.random() * 20)}+</span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setOfferModal(true)}
        >
          Send Offer
        </button>
      </td>
      <SendOfferModal setOfferModal={setOfferModal} offerModal={offerModal} />
    </tr>
  );
};
