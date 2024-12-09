import { Link, Routes, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Display from './Display';
const Landing = () => {
        let params = useParams();
        return <>
           
                <h4>Welcome&nbsp; {params.name} to React Concepts</h4>
                <h4> Just Launched...</h4>
                <Link to="Display/jsxConcept">      
                jsxConcept
                </Link> <br/>
                <Link to="Display/javascriptExpression">           
                javascriptExpression
                </Link> <br/>
                <Link to="Display/State">          
                State
                </Link> <br/>
                <Link to="Display/Educator"> 
                Component Life cycle
                </Link>              
                <Routes>
                            <Route path="Display/:topic" element={<Display/>}/> 
                        </Routes>
            </>
    }
    export default Landing;