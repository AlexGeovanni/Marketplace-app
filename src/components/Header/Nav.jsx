export default function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Ropa
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Electronicos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Muebles
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
