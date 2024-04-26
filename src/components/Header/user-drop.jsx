import { PiUserCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
export default function UserDropdown(){
    return(
        <div className="dropdown-center cp">
          <PiUserCircleLight className="user-icon " data-bs-toggle="dropdown" aria-expanded="false" />
        <ul className="dropdown-menu">
          <Link to={"/accout"} className="text-decoration-none">
            <a className="dropdown-item" href="#">
              Perfil
            </a>
          </Link>
          <Link to={"/"} className="text-decoration-none">
            <a className="dropdown-item text-danger" href="#">
             Cerrar sesión
            </a>
          </Link>
        </ul>
      </div>
    )
}