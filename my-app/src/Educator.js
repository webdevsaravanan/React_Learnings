import { useState } from "react";
var course = [{
    "name": "Angular",
    "educator": "Lucia"
    },
    {
    "name": "ReactJS",
    "educator": "Daniel"
    },
    {
    "name": "Ajax",
    "educator": "Paula"
    }
    ]
    const Educator = () => {
    const [crsData] = useState(course)
    return(<>
    <h4>UI Courses list</h4>
    <div> {crsData.map(function(course){
    return (<div>
    <b>Course:</b>{course.name}<br/>
    <b>Educator: </b> {course.educator} <br/><br/>
    </div>);
    })}
    </div>
    </>);
    }
export default Educator;
