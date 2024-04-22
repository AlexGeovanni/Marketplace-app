import img from "../../assets/img-13.jpeg";
import { BsFilter } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import AsideFilter from "./Aside-filter";

import { Link } from "react-router-dom";

export default function ViewProducts() {
  return (
    <>
      <section className="seccions m-auto px-3 px-lg-4  mt-3 mt-md-5">
        <div className="container__view-products">
          <header className="options p-1 py-2 py-md-3 d-flex justify-content-between align-items-center">
            <div className="d-none d-lg-flex gap-4">
              <select
                className="form-select rounded-1"
                aria-label="Default select example"
              >
                <option hidden>Tipo de producto</option>
                <option value="1">Sudadera</option>
                <option value="2">Jeans</option>
                <option value="3">Calzado</option>
              </select>
              <select
                className="form-select rounded-1"
                aria-label="Default select example"
              >
                <option hidden>Ordenar por</option>
                <option value="1">Nombre</option>
                <option value="2">Precio mayor</option>
                <option value="3">Precio menor</option>
              </select>
            </div>
            <div
              className="d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <BsFilter className="cp icon-filter" />
            </div>
            <AsideFilter />
            <div className="opacity-75 fw-semibold d-none d-lg-block">
              Productos total:15
            </div>
          </header>
          <div className="products__container ">
            <div className="row g-2 g-md-3">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card-product position-relative overflow-hidden rounded  d-flex flex-column align-items-stretch">
                  <div className="label-off__card-product position-absolute  bg-warning d-flex flex-column">
                    <IoIosFlash className="icon-off text-dark  " />
                    <p className="m-0">-20%</p>
                  </div>
                  <Link to={"/detail"} className="img__card-product">
                    <img className="rounded " src={img} />
                  </Link>
                  <Link to={"/detail"} className="titles-card text-decoration-none text-dark p-1 p-md-2">
                    <p className=" m-0 text-truncate">
                      sudadera para hombres solo colore verde
                    </p>
                    <div>
                      <span className="text-decoration-line-through text-danger me-2">
                        $MXN150
                      </span>
                      <p className="fw-bold d-inline m-0">$MXN100</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card-product  rounded  d-flex flex-column align-items-stretch">
                  <Link to={"/detail"} className="img__card-product ">
                    <img className="rounded " src={img} />
                  </Link>
                  <Link to={"/detail"} className="titles-card text-decoration-none text-dark p-1 p-md-2">
                    <p className=" m-0 text-truncate">
                      sudadera para hombres solo colore verde
                    </p>
                    <div>
                      <p className="fw-bold m-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card-product  rounded  d-flex flex-column align-items-stretch">
                  <Link to={"/detail"} className="img__card-product">
                    <img className="rounded " src={img} />
                  </Link>
                  <Link to={"/detail"} className="titles-card text-decoration-none text-dark p-1 p-md-2">
                    <p className=" m-0 text-truncate">
                      sudadera para hombres solo colore verde
                    </p>
                    <div>
                      <p className="fw-bold m-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card-product  rounded  d-flex flex-column align-items-stretch">
                  <Link to={"/detail"} className="img__card-product">
                    <img className="rounded " src={img} />
                  </Link>
                  <Link to={"/detail"} className="titles-card text-decoration-none text-dark p-1 p-md-2">
                    <p className=" m-0 text-truncate">
                      sudadera para hombres solo colore verde
                    </p>
                    <div>
                      <p className="fw-bold m-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card-product  rounded  d-flex flex-column align-items-stretch">
                  <Link to={"/detail"} className="img__card-product">
                    <img className="rounded " src={img} />
                  </Link>
                  <Link to={"/detail"} className="titles-card text-decoration-none text-dark p-1 p-md-2">
                    <p className=" m-0 text-truncate">
                      sudadera para hombres solo colore verde
                    </p>
                    <div>
                      <p className="fw-bold m-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3">
                <div className="card-product  rounded  d-flex flex-column align-items-stretch">
                  <Link to={"/detail"} className="img__card-product">
                    <img className="rounded " src={img} />
                  </Link>
                  <Link to={"/detail"} className="titles-card text-decoration-none text-dark p-1 p-md-2">
                    <p className=" m-0 text-truncate">
                      sudadera para hombres solo colore verde
                    </p>
                    <div>
                      <p className="fw-bold m-0">$100</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
