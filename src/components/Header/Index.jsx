import Navbar from "./Nav";

import { IoBagOutline } from "react-icons/io5";
import UserDropdown from "./user-drop";

const logo = (
  <svg
    width="80"
    height="35"
    viewBox="0 0 128 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M79.9531 54.4629V17.207H84.3965V50.166H101.682V54.4629H79.9531ZM104.807 54.8047V17.207H111.398L115.5 46.3086L119.602 17.207H126.193V54.8047H122.336V20.5762L117.355 54.8047H113.645L108.664 20.5762V54.8047H104.807Z"
      fill="black"
    />
    <line
      y1="-2"
      x2="43.2629"
      y2="-2"
      transform="matrix(-0.303724 -0.95276 0.959921 -0.280272 53.83 55)"
      stroke="#3B37FF"
      strokeWidth="3"
    />
    <line
      y1="-2"
      x2="42.0814"
      y2="-2"
      transform="matrix(-0.303724 -0.95276 0.959921 -0.280272 31.2 55)"
      stroke="#3B37FF"
      strokeWidth="3"
    />
    <path
      d="M24 12V12C24 7.02944 28.0294 3 33 3H45C49.9706 3 54 7.02944 54 12V12"
      stroke="#3B37FF"
      strokeWidth="4"
    />
    <path
      d="M16.1259 15.108L2.95482 51.9779C2.48952 53.2804 3.45512 54.6507 4.83825 54.6507H72.1618C73.5449 54.6507 74.5105 53.2804 74.0452 51.9779L60.8741 15.108C60.5898 14.3121 59.8358 13.7808 58.9907 13.7808H18.0093C17.1642 13.7808 16.4102 14.3121 16.1259 15.108Z"
      stroke="#3B37FF"
      strokeWidth="4"
    />
  </svg>
);

export default function Header() {
  return (
    <>
      <header className="header-container  d-flex align-items-start py-3 ">
        <nav className="navbar container-fluid navbar-expand-lg py-0">
          <div className="container-fluid  p-0">
            <div className="cp">{logo}</div>
            <Navbar />
          </div>
        </nav>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-2 ms-1 ps-3">
          <IoBagOutline className="user-icon cp icon-bag" />
          <UserDropdown />
          </div>

          <label id="icon-header" className="d-lg-none" htmlFor="check"
           data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false"
           aria-label="Toggle navigation">
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>
    </>
  );
}
