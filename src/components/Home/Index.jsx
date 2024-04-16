import Header from "../Header/Index";


export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-dange px-4 ">
        <div className="row rounded-3 overflow-hidden">
          <div className="text-white col-6 text-home d-flex flex-column justify-content-center">
            <h1>Local Marketplace</h1>
            <div>
              <p>Descubre locales de en Tijuana, BC.</p>
            </div>
            <button className="btn btn-primary  w-50 py-2">Comprar ahora</button>
          </div>
          <div className="col-6 p-0">
            <div className="img__home ">
              <img src="../../../public/img-5.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 mt-5">
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
