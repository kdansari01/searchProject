import React from "react";
import Modal from "../searchProject/Modal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const PostCard = () => {
  return (
    <div className="d-lg-none d-xl-none d-sm-block d-md-none">
      <div className="row">
        <div className="card p-4">
          <div className="card-body">
            <div className="d-flex justify-content-between ">
              <p className="card-subtitle mb-2 text-muted">
                Category / Sub Category
              </p>
              <p className="d-flex text-end text-muted">12 Aug, 2022</p>
            </div>

            <h5 className="card-title">Design & Art / Poster Design</h5>
            <div className="d-flex justify-content-between ">
              <p className="text-muted">Project Details</p>
              <p className="activeMob">Active</p>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              sit leo amet diam tempus, aliquam lectus.
            </p>
            <h6 className="text-muted">Offer</h6>
            <div className="d-flex justify-content-between ">
              <div>
                <PermIdentityIcon className="offer" fontSize="20" />
                <PermIdentityIcon className="offer" fontSize="20" />
                <PermIdentityIcon className="offer" fontSize="20" />
                {Math.floor(Math.random() * 20)}+
              </div>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
