import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function EmployeeSearch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [designation, setDesignation] = useState("");
  const fetchData = () => {
    axios
      .get("http://localhost:4000/employees/" + id)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
        setPost({});
      });
  };
  const addData = () => {
    console.log(userId);
    axios
      .post("http://localhost:4000/employees/",{id:userId,name:employeeName,designation:designation} )
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
       
      });
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addData();
  };
  return (
    <div
      className="container"
      style={{ padding: "15px" }}
    >
    <h1>UseEffect Hook concepts:</h1>
        <br />
        <h4>Enter User ID(4573-4585)</h4>
        <br />
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <br />
        <div>
        Employee Name : {post.name}
        <br />
        Employee Designation :{post.designation}
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <br />
        <h4>Enter user details to save</h4>
        <br />
        ID: <input required type="text" onChange={(e) => setUserId(e.target.value)} />
        <br />
        <br />
        Name: <input required type="text" onChange={(e) => setEmployeeName(e.target.value)}  />
        <br />
        <br />
        Designation: <input  required type="text" onChange={(e) => setDesignation(e.target.value)}  />
        <br />
        <br />
        <br />
        <button type="submit" className="btn btn-secondary">Save</button>
      </form>
    </div>
  );
}
export default EmployeeSearch;
