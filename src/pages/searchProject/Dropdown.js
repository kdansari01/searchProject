import React from "react";
import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';
const Dropdown = () => {

  return (
    <div className="d-lg-block d-xl-block d-sm-none d-md-block d-none ">
      <div className="bg-light mb-4 container-fluid">
        <h5 className="text-muted">Filter By</h5>
       
        <div className="justify-content- row d-flex col-12 "  >
          <div className="col-lg-3 col-md-3 col-4">
            <Box sx={{ minWidth: 120 }}>
              <label>Category</label>
              <FormControl fullWidth>
            
                <Select
                  label=""
                  id="demo-simple-select"
                 
                >

                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="col-lg-3 col-md-3 col-4">
            <Box sx={{ minWidth: 120 }}>
              <label>Sub-Category</label>
              <FormControl fullWidth>
            
                <Select
                  label=""
                  id="demo-simple-select"
                 
                >

                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="col-lg-3 col-md-3 col-4">
            <Box sx={{ minWidth: 120 }}>
              <label>Delivery Time</label>
              <FormControl fullWidth>
            
                <Select
                  label=""
                  id="demo-simple-select"
                 
                >

                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="col-lg-3 col-md-3 col-4">
            <Box sx={{ minWidth: 120 }}>
              <label>Country</label>
              <FormControl fullWidth>
            
                <Select
                  label=""
                  id="demo-simple-select"
             
                >

                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="col-lg-3 col-md-3 col-4">
            <Box sx={{ minWidth: 120 }}>
              <label>Post Day</label>
              <FormControl fullWidth>
            
                <Select
                  label=""
                  id="demo-simple-select"
                 
                >

                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
           <div className="col-lg-3 col-md-3 col-4">
            <Box sx={{ minWidth: 120 }}>
              <label>Pricing</label>
              <FormControl fullWidth>
            
                <Select
                  label=""
                  id="demo-simple-select"
              I
                >

                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        
          <div className="col-lg-3 col-md-3 col-4">
            <div className="d-flex mt-4">
            <h6 className="text-muted m-3">Clear Filter</h6>
            <Button variant="contained" className="bg-dark text-light">Apply</Button>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Dropdown;
