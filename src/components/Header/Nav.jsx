import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link className="nav-item text-decoration-none" to={"/"} >
            <span className="nav-link active" aria-current="page" >
              Home
            </span>
          </Link>

          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </span>
            <ul className="dropdown-menu">
              <Link className="text-decoration-none" to={"/categorys/ropa"}>
                <a className="dropdown-item">
                  Ropa
                </a>
              </Link>
              <Link className="text-decoration-none" to={"/electronicos"}>
                <a className="dropdown-item" >
                  Electronicos
                </a>
              </Link>
              <Link className="text-decoration-none" to={"/muebles"}>
                <a className="dropdown-item" >
                  Muebles
                </a>
              </Link>
            </ul>
          </li>
          <Link className="nav-item text-decoration-none" to={"/dashboard"}>
            <a className="nav-link" >
              Dashboard
            </a>
          </Link>
        </ul>
      </div>
      
    </>
  );
}
