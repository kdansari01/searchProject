import { TextField } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
const Modal = ({title,icon}) => {
  return (
    <div>
<button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  {icon} {title}
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content p-2">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Send Offer</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
        <div>
        <lable>Total Offer Amount</lable>
      <TextField
            className=" col-12 "
            id="outlined-basic"
            variant="outlined"
            required
          />
          </div>
        <div>
          <lable>Delivery Time</lable>
          <TextField
            className=" col-12 "
            id="outlined-basic"
            variant="outlined"
            required
          />
          </div>
          <div>
          <lable>Description</lable>
          <TextField
            className=" col-12 "
            id="outlined-basic"
            variant="outlined"
            required
          />
          </div>
      </div>
      <div className="modal-footer col-12">
        <button type="button" className="btn btn-primary col-12">Send</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Modal
