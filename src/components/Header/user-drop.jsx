import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
export default function UserDropdown() {
  const [isAuthent, setIsAuthent] = useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    if (!isAuthent)  navigate("/client");
    setIsAuthent(false)
  };

  return (
    <div className="dropdown-center cp"  >
      <CiUser onClick={handleClick}
        className="user-icon "
        data-bs-toggle={`${isAuthent && "dropdown"}`}
        aria-expanded="false"
      />
      {isAuthent && (
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
      )}
    </div>
  );
}
