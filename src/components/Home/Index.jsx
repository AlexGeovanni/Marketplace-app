import Header from "../Header/Index";

export default function Home() {
  return (
    <>
      <Header />
      <section className="seccions bg-dange px-3 px-lg-4 ">
        <div 
        className="container-home rounded-3  justify-content-center py-md-3 py-lg-5">
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
      <section className="seccions px-3 px-lg-4 mt-5">
        <h2 className="fs-3">Lo que te puede interesar</h2>
        <div className="d-flex flex-wrap gap-4">
          <div className="cp border">
            <img
              className="rounded-circle "
              width={100}
              height={100}
              src="../../../public/img-3.jpg"
              alt=""
            />
            <p className="border m-0 text-center">Electronicos</p>
          </div>
          <div className="cp border">
            <img
              className="rounded-circle "
              width={100}
              height={100}
              src="../../../public/img-3.jpg"
              alt=""
            />
            <p className="border m-0 text-center">Electronicos</p>
          </div>
          <div className="cp border">
            <img
              className="rounded-circle "
              width={100}
              height={100}
              src="../../../public/img-3.jpg"
              alt=""
            />
            <p className="border m-0 text-center">Electronicos</p>
          </div>
        </div>
      </section>
    </>
  );
}
