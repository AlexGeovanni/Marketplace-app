import img from "../../assets/img-13.jpeg"

export default function Ropaindex(){
    return (
        <>
            <section className="seccions  px-3 px-lg-4 ">
                <div className="container-fluid row">
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center">
                        <img
                            className="rounded "
                            width={"100%"}
                            height={250}
                            src={img}
                        />
                        <p className=" m-0 text-center">Hombres</p>
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center">
                        <img
                            className="rounded "
                            width={"100%"}
                            height={250}
                            src={img}
                        />
                        <p className=" m-0 text-center">Mujeres</p>
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center">
                        <img
                            className="rounded "
                            width={"100%"}
                            height={250}
                            src={img}
                        />
                        <p className=" m-0 text-center">niños & niñas</p>
                    </div>
                </div>
            </section>
        </>
    )
}