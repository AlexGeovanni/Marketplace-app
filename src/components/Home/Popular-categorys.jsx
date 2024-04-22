import img1 from "../../assets/img-categorys/img-4.jpg";
export default function PopularCategorys() {
    return(
        <>
        <section className="seccions border px-3 px-lg-4 mt-3 mt-md-5">
        <h2 className="fs-3">Lo que te puede interesar</h2>
        <div className="d-flex flex-wrap gap-4">
          <div className="cp ">
            <img
              className="rounded-circle "
              width={100}
              height={100}
              src={img1}
              alt=""
            />
            <p className=" m-0 text-center">Electronicos</p>
          </div>
          <div className="cp ">
            <img
              className="rounded-circle "
              width={100}
              height={100}
              src={img1}
              alt=""
            />
            <p className=" m-0 text-center">Electronicos</p>
          </div>
          <div className="cp ">
            <img
              className="rounded-circle "
              width={100}
              height={100}
              src={img1}
              alt=""
            />
            <p className=" m-0 text-center">Electronicos</p>
          </div>
        </div>
      </section>
        </>
    )
}