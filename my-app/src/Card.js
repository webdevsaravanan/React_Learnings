import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Content";
function Card() {
  return (
    <>
    <h1>Accessing Child Nodes:</h1>
      <Content>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <p className="card-text">Thank you for visiting our website</p>
          </div>
        </div>
      </Content><br/>
      <Content>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Do you wish to continue</h5>
            <button className="btn btn-primary">Yes</button>
            <button className="btn btn-default">No</button>
          </div>
        </div>
      </Content>
    </>
  );
}
export default Card;