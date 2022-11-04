import React from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Modal from "./Modal";

const Card = ({ post }) => {
  return (
    <div className="d-lg-none d-xl-none d-sm-block d-md-none">
      <div className="mb-2 ">
      {post.map((ele, index) => (
                 <div className="card-body border mb-2 mx-2 d-flex justify-content-center ">
                    <h5 className="card-title">
                    <PermIdentityIcon className=""/>
                        {ele.name}</h5>

                 <p className="card-text">
                 Price  <span className="text-center text-primary ">
                 {Math.floor(Math.random() * 1000)} 
                 </span>
                 </p>
                
                 <p className="card-text">
                 Delivery Time
                 <span className="text-center text-primary mx-4">{Math.floor(Math.random() * 10)}</span>

                 </p>

                 <Modal title={"Manage"}/>
                 
               </div>
            ))}
     
      </div>
    </div>
  );
};

export default Card;



