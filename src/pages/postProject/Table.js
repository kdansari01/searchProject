import React, { useState } from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Pagination } from './Pagination';
import EditIcon from '@mui/icons-material/Edit';
import "./style.css"
import Button from '@mui/material/Button';

const Table = ({headers,posts}) => {
const [page, setPage] = useState(1);

  return (
    <div>
       <div className="searchProject card row  d-lg-block d-xl-block d-sm-none d-md-block d-none">
          <table className="">
            <tr className="">
              {headers.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
            {posts.map((ele, ind) => (
              <tr key={ele.id} className="tableCard mb-2 border ">
                
                <td >
                  <input type="checkbox"/>
                 <span className="px-2">12 Aug, 2022</span> </td>
                <td className="text-center">
                Design & Art / Poster Design
                </td>
                <td className="text-center">
                Lorem ipsum dolor sit <br/>amet, consectetur <br/> adipiscing elit.
                </td>
                <td className="text-center ">
                <PermIdentityIcon className="offer" fontSize="10"/>
                <span>{Math.floor(Math.random() * 20)}+</span>
                </td>
                <td className="text-center">Active</td>
                <td>
                  {/* <button>Send offer</button> */}
                  {/* <Modal title={"Manage"} /> */}

            <Button variant="contained" className="bg-dark text-light"><EditIcon/>Manage</Button>

                </td>
              </tr>
            ))}
          </table>
          <div  className="justify-content-center d-flex text-center mt-2">
        <Pagination value={page} range={6} onChange={setPage} />
        </div>
        </div>
    </div>
  )
}

export default Table
