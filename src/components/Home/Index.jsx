import PopularCategorys from "./Popular-categorys";
import ProductOff from "./Product-off";
import svg from "../../assets/img-home.svg";

export default function Home() {
  return (
    <>
      <section className="home-seccions">
        <div className="seccions px-3 px-lg-4 d-flex flex-column justify-content-center ">
          <div className="container-home row  gy-3 py-4">
            <div className="text-home  col-12 col-md-6 col-lg-7   ">
              <div className=" d-flex flex-column justify-content-around align-items-center align-items-md-start ">
                <h1>Local Marketplace</h1>
                <div>
                  <p className="">Descubre locales de en Tijuana, BC.</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary  py-2">
                    Comprar ahora
                  </button>
                  <button className="btn btn-primary  py-2">
                    Registrate
                  </button>
                </div>
              </div>
            </div>
            <div className=" img__container-home col-12 col-md-6 col-lg-5">
              <div className="">
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
