import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Pagination from "./Pagination";
import Posts from "./Posts";

function ViewDepartment() {
  const [department, setdepartment] = useState([]);
  const [dept,setdept]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [searchWord,setsearchWord]=useState('')


  const paginate = pageNumber => setCurrentPage(pageNumber);

  const getData = () => {
    setLoading(true)
    setTimeout(() => {
      axios.get(`http://localhost:8080/dept/view`).then((res) => {
        console.log(res.data);
        setdept(res.data)
        setdepartment(res.data);
      });
      setLoading(false)

      
    }, 5000);
 
  };
 
  const filterdata= department.filter((data)=>data.DepartmentName.toLowerCase().includes(searchWord.toLowerCase()))
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterdata.slice(indexOfFirstPost, indexOfLastPost);
  const handleSearch=async(e)=>{
    setsearchWord(e.target.value)
   
  }



  useEffect(() => {
    getData();
   
  }, []);

  return (
    <div >

     <Posts 
     department={currentPosts}
     handleSearch={handleSearch}
     loading={loading} 
     />
     <div style={{marginTop:'400px',margin:'auto'}}>

    <Pagination 
     postsPerPage={postsPerPage}
     totalPosts={department.length}
     paginate={paginate}
     />
     </div>
    </div>
  );
}

export default ViewDepartment;
