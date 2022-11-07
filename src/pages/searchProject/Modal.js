import { TextField } from "@mui/material";
import { Modal } from "react-bootstrap";
import React from "react";
const SendOfferModal = ({ setOfferModal, offerModal }) => {
  return (
    <Modal
      size="md"
      show={offerModal}
      onHide={() => setOfferModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Send Offer
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body ">
        <div className="modal-wrapper">
          <lable className="input-lable">Total Offer Amount</lable>
          <input type="text" className="form-control mt-2 mb-2" />
        </div>
        <div>
          <lable className="input-lable">Delivery Time</lable>
          <input type="text" className="form-control mt-2 mb-2" />
        </div>
        <div>
          <lable className="input-lable">Description</lable>
          <textarea type="text" className="form-control mt-2" />
        </div>
      </Modal.Body>
      <div className="modal-footer col-12">
        <button type="button" className="btn btn-dark text-light col-12">
          Send
        </button>
      </div>
    </Modal>
  );
};

export default SendOfferModal;
