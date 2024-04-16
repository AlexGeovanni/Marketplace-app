import { FaRegUserCircle } from "react-icons/fa";
export default function UserDropdown(){
    return(
        <div className="dropdown-center cp">
          <FaRegUserCircle className="user-icon " data-bs-toggle="dropdown" aria-expanded="false" />
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Perfil
            </a>
          </li>
          <li>
            <a className="dropdown-item text-danger" href="#">
             Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    )
}