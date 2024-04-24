import PopularCategorys from "./Popular-categorys";
import ProductOff from "./Product-off";
 import svg from "../../assets/man-img.png";

export default function Home() {
  return (
    <>
      <section className="home-seccions mt-seccions-index">
        <div className="seccions  px-3 px-lg-4 d-flex flex-column justify-content-center ">
          <div className="container-home  row g-0 ">
            <div className="text-home   col-12 col-md-6 col-lg-7   ">
              <div className=" p-2 py-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start ">
                <h1 className="fw-bold">Local Marketplace</h1>
                <div className="text-center text-md-start">
                  <h2 className="fs-1">Empieza ahora como nuesto cliente o vendedor</h2>
                  <p className="">Descubre locales de en Tijuana, BC.</p>
                </div>
                <div className="btns__text-home   d-flex gap-2 mt-2 mt-md-3">
                  <button className="btn rounded-0 w-100 btn-primary  ">
                    Comprar ahora
                  </button>
                  <button className="btn rounded-0 w-100 btn-primary   ">
                    Registrate
                  </button>
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
