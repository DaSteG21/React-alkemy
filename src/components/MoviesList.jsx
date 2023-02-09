import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MoviesList() {
  const navigate = useNavigate();
  let token=null

    useEffect(() => {
      token = localStorage.getItem("token");
      
      !token && navigate("/")
    }, []);

  return (
    <>
      
      

      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
