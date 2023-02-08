import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header >
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active"> Home </Link>
          </li>
          <li>
            <Link to="/movies"> Listado </Link>
          </li>
          <li>
            <Link to="/contact"> Contacto </Link>
          </li>
        </ul>
      </nav> */}

<nav className="navbar navbar-expand-lg" style={{backgroundColor:"black"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color: "white"}} to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{color: "white"}} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/movies">Listado</Link>
        </li>  
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}
