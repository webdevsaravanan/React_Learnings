import { useParams } from 'react-router-dom';
const Display = ()=> {
    let params = useParams();
                return <>
                            <h2>Inside {params.topic} component</h2>
                        </>
};                    
export default Display;