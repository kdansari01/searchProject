import "./style.css";
import Footer from "../../component/footer/Footer";
import { HeroBackground } from "../../component/hero/HeroBackground";
import { useState, useEffect } from "react";
import axios from "axios";
// import Modal from "../searchProject/Modal";
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import { Pagination } from "./Pagination";
import PostCard from "./card";
import AddIcon from '@mui/icons-material/Add';
import SortBy from "./Dropdown";
import Table from "./Table"
const PostProject = () => {
  const [posts, setPost] = useState([]);

  const headers = [
    "Date",
    "Category/Sub-Category",
    "Project Details",
    "Offers",
    "Status",
    "Action",
  ];

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setPost(res.data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div>
        <HeroBackground title={"Manage Project"} />
        <div className=" manageProjectAcrive d-flex ">
          
          <div className="activePouse margin d-lg-block d-xl-block d-sm-none d-md-block d-none">
           <SortBy/>
          </div>

          <div className="margin">
            <button className="manageProjectBtn d-lg-block d-xl-block d-sm-none d-md-block d-none"> + Post New Project</button>
            <button className="manageProjectBtn1 d-lg-none d-xl-none d-sm-block d-md-none d-block">
              <AddIcon/>
            </button>

          </div>
        </div>
        <div className="searchProjectMain d-flex justify-content-center container">
          <PostCard post={posts} className=""/>

        <Table posts={posts} headers={headers}/>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostProject;
