
import img2 from "../../assets/img-16.jpeg";
import img3 from "../../assets/img-17.webp";
import img4 from "../../assets/img-categorys/man-ropa.jpeg";

export default function PopularCategorys() {
    return(
        <>
        <section className="seccions container-popular p-3 py-md-4 px-lg-4 mt-3 mt-md-5">
        <h2 className="fs-3">Lo que te puede interesar</h2>
        <div className="row g-3 mt-2 ">
          <div className="cp card-popular col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <img
              className=""
              src={img4}
              alt=""
            />
            <p className=" m-0 text-center">Ropa de hombre</p>
          </div>
          <div className="cp card-popular col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <img
              className=""
              src={img3}
              alt=""
            />
            <p className=" m-0 text-center">Celular</p>
          </div>
          <div className="cp card-popular col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <img
              className=""
              src={img2}
              alt=""
            />
            <p className=" m-0 text-center">Empezar a vender</p>
          </div>
        </div>
      </section>
        </>
    )
}