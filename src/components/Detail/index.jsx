
import { Link } from "react-router-dom"
import img from "../../assets/img-10.jpg"

export default function DetailView(){
    return(
        <section className="seccions mt-seccions-index  details mx-auto mt-4 ">
                <div className=" row  py-2 py-lg-4 px-lg-2 m-0">
                        <div className="col-12 col-lg-8 row m-0 p-0">
                            <div className="col-12 col-lg-7">
                                <img className='w-100' src={img} alt="" />
                            </div>
                            <div className="info__details  col-12 col-lg-5 ">
                                <h3 className="- fw-normal lh-1 mt-3 mt-lg-0">{name}</h3>
                                <p className="fw-semibold m-0 mt-4 ">$MXN{200}</p>
                                
                                <div>
                                    <span className="fw-light">Cantidad disponible</span> 
                                    : 1
                                </div>
                                <div>
                                    <span className="fw-light">Color</span> 
                                    : {"red"}
                                </div>
                                <div className="mt-2">
                                    <p className="fw-light mb-1">Tamaño:</p> 
                                    <select className="w-75 w-md-25  form-select" value={"selectSize"} aria-label="Default select example">
                                        <option  defaultValue="" hidden>Seleciona una opción</option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                            <div className="bg-dark bg-opacity-10 rounded p-4 py-3 mb-5">
                                <p>Puntos de entregas</p>
                                <span className="fw-light">Margaritas, plaza sendero, macroplaza, centro</span>
                                
                            </div>

                            
                        <button  className="w-100 btn btn-primary border-0 p-0" disabled={ false} >
                                <Link to="/car-shop"  className="text-decoration-none text-white btn w-100 py-2 border" >Comprar ahora</Link>
                            </button>
                            
                            <button className="btn btn-primary w-100 mt-3 py-2 " disabled={ false}>Agregar a mi bolsa</button> 
                        </div>
                </div>
                <div className='mt-4 p-4'>
                    <h3 className=''>Detalles</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum eos voluptas! Voluptate fugiat voluptatibus molestias architecto quidem quae praesentium eum. Mollitia, cupiditate. Laborum consectetur magnam cumque. Suscipit, obcaecati asperiores.</p>
                </div>
            </section>
    )
}