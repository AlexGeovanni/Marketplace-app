import { Link } from "react-router-dom";
import img from "../../assets/img-13.jpeg";


export default function Ropaindex() {
  return (
    <>
      <section className="menu-ropa seccions m-auto px-3 px-lg-4  mt-3 mt-md-5">
        <div className="container__menu-ropa  gy-2 gx-0 gy-md-0 row  ">
          <Link to={"mujer"} className="text-decoration-none col-6 col-md-4 p-1  ">
            <div className="card__menu-ropa cp rounded position-relative overflow-hidden  d-flex flex-column align-items-center">
              <img className="rounded " src={img} />
              <p className=" fw-semibold m-0 text-center">Mujer</p>
            </div>
          </Link>
          <Link to={"hombre"} className="text-decoration-none col-6 col-md-4 p-1 ">
            <div className="card__menu-ropa cp rounded position-relative overflow-hidden  d-flex flex-column align-items-center">
              <img className="rounded " src={img} />
              <p className=" fw-semibold m-0 text-center">Hombres</p>
            </div>
          </Link>
          <Link to={"kids"} className="text-decoration-none col-6 col-md-4 p-1 ">
            <div className="card__menu-ropa cp rounded position-relative overflow-hidden d-flex flex-column align-items-center">
              <img className="rounded " src={img} />
              <p className=" fw-semibold m-0 text-center">Kids</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
