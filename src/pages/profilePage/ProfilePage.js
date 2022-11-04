import { Button, TextField } from "@mui/material";
import React from "react";
import "./profile.css"
import Profile from "../../assests/image/profile.png";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import { HeroBackground } from "../../component/hero/HeroBackground";
const ProfilePage = () => {
  return (
    <>
      <HeroBackground title={"User Profile"} />
      <div className="profileHead light-bg p-4 p-sm-2 ">
        <div className="card">
          <div className="row col-12 d-flex justify-content-center p-4 ">
            <div className="col-lg-3 col-md-6 col-12 ">
              <img
                src={Profile}
                alt="profile"
                className="rounded-circle w-75 mt-lg-5"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                className="uploadButton"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera className="" />
              </IconButton>
            </div>
            <form className="row col-lg-6 d-flex col-md-6 col-12 ">
              <div className="d-lg-flex col-lg-12 col-md-12 col-12 mb-3 d-sm-block">
                <div className=" col-lg-6 col-md 12 col-12">
                  <label>First Name</label>
                  <TextField
                    className="col-12 "
                    id="outlined-basic"
                    variant="outlined"
                    required
                  />
                   
                </div>
                <div className="col-lg-6 col-md 12 col-12">
                <label>Last Name</label>
                <TextField
                    className="col-12 "
                    id="outlined-basic"
                    variant="outlined"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
              <label>Contact</label>
                <TextField
                  className="signUpUserName w-100 mb-3"
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  required
                  name="email"
                />
              </div>
              <div className="col-12">
              <label>Email</label>
                <TextField
                  className="signUpPassword w-100 mb-3 "
                  id="outlined-basic"
                  variant="outlined"
                  type="email"
                  required
                />
              </div>
              <div className="col-12">
              <label>Country</label>

                <TextField
                  className="signUpPassword w-100 mb-3 "
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  required
                />
              </div>
              <div className="col-12">
                <Button variant="contained" className="col-12">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
