
import PopularCategorys from "./Popular-categorys";
import ProductOff from "./Product-off";
export default function Home() {
  return (
    <>
      <section className="seccions  px-3 px-lg-4 ">
        <div className="container-home rounded-3  justify-content-center py-md-3 py-lg-5">
          <div className="text-home d-flex flex-column justify-content-center px-4 py-3 rounded-3">
            <h1>Local Marketplace</h1>
            <div>
              <p>Descubre locales de en Tijuana, BC.</p>
            </div>
            <button className="btn w-50 w-lg-25 btn-primary d-inline py-2">
              Comprar ahora
            </button>
          </div>
        </div>
      </section>
      <PopularCategorys />
      <ProductOff />

    </>
  );
}
