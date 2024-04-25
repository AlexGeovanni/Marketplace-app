import PopularCategorys from "./Popular-categorys";
import ProductOff from "./Product-off";
 import svg from "../../assets/man-img.png";
 import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home-seccions mt-seccions-index">
        <div className="seccions px-3 px-lg-4 d-flex flex-column justify-content-center ">
          <div className="container-home  row g-0 ">
            <div className="text-home mt-5 mt-md-2 m-lg-0  col-12 col-md-6 col-lg-7   ">
              <div className=" text__container-home text-center d-flex flex-column justify-content-center align-items-center  ">
                <h1 className="">Local Marketplace</h1>
                  <h2 className="" >Empieza ahora como nuestro cliente o vendedor.</h2>
                  <p className="">Descubre locales de en Tijuana, BC.</p>
                <div className="btns__text-home    d-flex gap-2 mt-2 mt-md-3">

                 <Link to={"/client"} className="btn-button btn rounded-0 w-100 btn-primary  ">
                    Comprar ahora
                  </Link>
                  <Link to={"/client"} className=" btn-button btn rounded-0 w-100 btn-primary  ">
                    Comprar ahora
                  </Link>
                </div>
              </div>
            </div>
            <div className=" img__container-home   col-12 col-md-6 col-lg-5 mt-4 m-md-0">
              <div className=" d-flex justify-content-center justify-content-md-end">
                <img className="" src={svg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularCategorys />
      <ProductOff />
    </>
  );
}
