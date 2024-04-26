import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link className="nav-item text-decoration-none" to={"/"} >
            <span className="nav-link" aria-current="page" >
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
            <ul className="dropdown-menu rounded-0">
              <Link className="text-decoration-none" to={"/categorys/ropa"}>
                <span className="dropdown-item w-100" href="#" >
                  Ropa
                </span>
              </Link>
              <Link className="text-decoration-none" to={"/electronicos"}>
                <span className="dropdown-item w-100"  >
                  Electronicos
                </span>
              </Link>
            </ul>
          </li>
          <Link className="nav-item text-decoration-none" to={"/dashboard"}>
            <span className="nav-link" >
              Dashboard
            </span>
          </Link>
        </ul>
      </div>
      
    </>
  );
}
