/* eslint-disable react/prop-types */
import { images } from "../Cards/imges.js"
import DropdownMobil from "./Dropdown.jsx"


export default function ProductCard({id,idImg,name,color,price,priceDiscount,size,cantidad,priceTotal,discount,DeleteAddProductCar}){

    return(
        <>
            <div className="row m-0 border-bottom py-3">
                <div className="col-4 col-lg-3 p-0">
                    <img  className="w-75" src={images[idImg]} alt="" />
                </div>
                <div className="col-8 col-lg-9">
                    <div className='row position-relative'>
                        <DropdownMobil DeleteAddProductCar={DeleteAddProductCar} id={id} />
                        <div className="col-12 col-lg-5  ">
                            <h3 className="fw-normal fs-5 lh-1 mt-lg-0">{name}</h3>
                            <p><span>Talla: {size}</span>, <span>Color: {color}</span></p>
                        </div>
                        <div className="col-4 col-lg-2  ">
                            <span className=""> 
                            {
                                discount > 0 && <span className="disc text-decoration-line-through fw-normal text-black-50">$MXN{price}</span> 
                            }  $MXN{priceDiscount}
                        </span>
                        </div>
                        <div className="col-4 col-lg-3 text-center">{cantidad}</div>
                        <div className="col-4 col-lg-2 text-end ">$ {priceTotal}</div>
                    </div>
                    <div className='d-none d-lg-flex justify-content-end gap-4 mt-4'>
                            <button className='btn bg-white border text-primary fw-semibold'>Comprar ahora</button>
                            <button onClick={()=>DeleteAddProductCar(id)} className='btn bg-white border text-danger fw-semibold'>Eliminar</button>
                    </div>
                </div>
            </div>
        </>
    )
}