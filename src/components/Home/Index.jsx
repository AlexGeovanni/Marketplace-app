import PopularCategorys from "./Popular-categorys";
import ProductOff from "./Product-off";
import svg from "../../assets/img-home.svg";

export default function Home() {
  return (
    <>
      <section className="home-seccions">
        <div className="seccions  px-3 px-lg-4 d-flex flex-column justify-content-center ">
          <div className="container-home  row g-0 ">
            <div className="text-home   col-12 col-md-6 col-lg-7   ">
              <div className=" p-2 py-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start ">
                <h1>Local Marketplace</h1>
                <div>
                  <p className="">Descubre locales de en Tijuana, BC.</p>
                </div>
                <div className="btns__text-home   d-flex gap-2 mt-2 mt-md-3">
                  <button className="btn w-100 btn-primary  ">
                    Comprar ahora
                  </button>
                  <button className="btn w-100 btn-primary   ">
                    Registrate
                  </button>
                </div>
              </div>
            </div>
            <div className=" img__container-home  col-12 col-md-6 col-lg-5 mt-4 m-md-0">
              <div className="p-2 py-md-4">
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
