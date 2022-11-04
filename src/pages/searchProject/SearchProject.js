// import React from "react";
// import ApiSearchProject from "./ApiSearchProject";
// import { HeroBackground } from "../../component/hero/HeroBackground";
// import Dropdown  from "./Dropdown";
// import Footer from "../../component/footer/Footer";
// import SearchIcon from '@mui/icons-material/Search';

// const SearchProject = () => {
//   return (
//     <div className="searchProject">
//       <div className="">
//       <HeroBackground title={"Search Project"} />

//         <div className="d-flex justify-content-center">

//         </div>
//       </div>
//        <div className="">
//        <Dropdown/>
//         </div>
//       <div className="projectTabel ">
//         {/* <ApiSearchProject /> */}
//       </div>
//       <Footer/>

//     </div>
//   );
// };

// export default SearchProject;

import "./style.css";
import Footer from "../../component/footer/Footer";
import { HeroBackground } from "../../component/hero/HeroBackground";
import { useState, useEffect } from "react";
import axios from "axios";
// import Modal from "../searchProject/Modal";
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import { Pagination } from "./Pagination";
import SearchIcon from '@mui/icons-material/Search';      
// import PostCard from "../postProject/card";
// import AddIcon from "@mui/icons-material/Add";
// import SortBy from "./Dropdown";
// import Table from "../postProject/Table";
import Card from "./Card";
import ApiSearchProject from "./ApiSearchProject";

const SearchProject = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setPost(res.data);
    };
    fetchApi();
  }, []);

  // console.log(posts)
  return (
    <>
      <div>
        <HeroBackground title={"Search Project"} />
        <div className="d-flex justify-content-center">
          <form className="searchProjects d-flex m-sm-2 " role="search">
            <input
              className="searchProInput  me-2"
              type="search"
              placeholder="Search more projects"
              aria-label="Search"
            />
            <span className="searchIconMain">
              <SearchIcon className="searchIcon text-dark" />
            </span>
          </form>
        </div>

        <div className="searchProjectMain d-flex justify-content-center container">
        <Card post={posts} className=""/>


          {/* <Table posts={posts} headers={headers} /> */}
          <ApiSearchProject posts={posts}/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SearchProject;
