import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FunctionalRender from './FunctionalRender';
import reportWebVitals from './reportWebVitals';
import JsxConcept from './JsxConcept';
import JavascriptExpression from './JavascriptExpression';
import MapFunction from './MapFunction';
import CssJsx from './CssJsx';
import MaterialUI from './MaterialUI';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import State from './State';
import Employees from './Employees';
import Card from './Card';
import Educator from './Educator';
import EmployeeSearch from './EmployeeSearch';
import Sample from './Sample';
import Form from './Form';
import FormValidate from './FormValidate';
import Ecart from './Ecart';
import SearchBar from './SearchBar';
import FormRef from './FormRef';
import AddAxios from './AddAxios';
import Header from './Header'; 
import Navigate from './Navigate';
import Landing from './Landing';
import {legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Login from './components/Login';
import {applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';

var store = applyMiddleware(thunk)(createStore)(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  {/*<BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <li className="nav-item">
              <Link className="navbar-brand" to="/Show">
                React Bootstrap Demo
              </Link>
            </li>
          </div>
        </nav>
        <Routes>
          <Route path="/Show" element={<Show />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Provider store={store}>
      <BrowserRouter>
      <Header />
  <Routes>
      <Route path="/" element={<FunctionalRender />}/>
      <Route index path="root" element={<FunctionalRender />}/>
      <Route path="jsxConcept" element={<JsxConcept />}/>
      <Route path="javascriptExpression" element={<JavascriptExpression/>}/>
      <Route path="mapFunction" element={<MapFunction/>}/>
      <Route path="cssJsx" element={<CssJsx/>}/>
      <Route path="Materialui" element={<MaterialUI/>}/>
      <Route path="State" element={<State/>}/>
      <Route path="Employees" element={<Employees/>}/>
      <Route path="Card" element={<Card/>}/>
      <Route path="Educator" element={<Educator />}/>
      <Route path="EmployeeSearch" element={<EmployeeSearch/>}/>
      <Route path="Sample" element={<Sample/>}/>
      <Route path="Form" element={<Form/>}/>
      <Route path="FormValidate" element={<FormValidate/>}/>
      <Route path="Ecart" element={<Ecart/>}/>
      <Route path="SearchBar" element={ <SearchBar/>}/>
      <Route path="FormRef" element={<FormRef/>}/>
      <Route path="AddAxios" element={<AddAxios/>}/>
      <Route path="RouterNavigation" element={<Navigate/>}/>
      <Route path="landing/:name/" element={<Landing/>}/>
      <Route path="Redux" element={<Counter/>}/>
      <Route path="Redux2" element={<Counter2/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="*" element={<FunctionalRender/>} />
  </Routes>
</BrowserRouter> 
</Provider>
  </>
)
// const sample = ReactDOM.createRoot(document.getElementById('Sample'));
// sample.render(
//     <Sample/>);   
// //unmount component 
//     setTimeout(() => {
//       sample.unmount( document.getElementById('Sample') );
//       console.log("unmounted")
//      }, 5000);



reportWebVitals()