import React from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SendOffer from "./Modal";

const Card = ({ post }) => {
  return (
    <div className="d-lg-none d-xl-none d-sm-block d-md-none ">
    
    <div className="container-fluid justify-content-center d-flex mt-4 ">
      <div className="row col-12 d-flex mt-4 ">
       <div className="card-header card bg-light text-dark text-end ">
        <h3 className="">Filter</h3>
            
            </div>
        {post.map((ele)=>(
          
        <div className="card mb-2 col-12" >
         
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
        </div>
        </div>
        ))}
      </div>
    </div>
     
    </div>
  );
};

export default Card;



