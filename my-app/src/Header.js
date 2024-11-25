import React from 'react'; 
import { Link, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
return (
<>
<div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width:"280px",float:"left",marginRight:"2%"}}>
    <Link to="root" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span className="fs-4">React Js Learnings</span>
    </Link>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"><Link to="root" className="nav-link " > Home</Link></li></ul>
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="jsxConcept"> jsx Concept </Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="javascriptExpression">Js Expression</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="mapFunction">Map Function</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="cssJsx">css in Jsx</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Materialui">Material UI</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="State">State</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Employees">Props</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Card">Accessing Child Nodes</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Educator">Component Life cycle</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="EmployeeSearch">UseEffect Hook</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Sample">UseEffect Component unmount</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Form">Form</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="FormValidate">Form Validate</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="Ecart">UseEffect Component unmount</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="SearchBar">Search Bar</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="FormRef">Uncontrolled Form</Link></li></ul> 
    <ul className="nav nav-pills flex-column mb-auto"><li className="nav-item"> <Link className="nav-link " to="AddAxios">Axios Data Fetch</Link></li></ul>
    <Outlet/>
    <hr/>
  </div>
       </>
        )
}
export default Header;
