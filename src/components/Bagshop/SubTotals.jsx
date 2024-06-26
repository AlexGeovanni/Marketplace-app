

export default function SubTotals (){
    return(
        <>
        <div className="col-12 col-lg-4 pb-2">
            <div className="bag__subtotal mt-4 mt-lg-0 position-sticky ">
                <div className="p-3 shadow-sm rounded-0 bg-white">
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Subtotal( producto):</p>
                        <p className="m-0">${0}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Descuento:</p>
                        <p className="m-0">${0}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Cupones: </p>
                        <p className="m-0">0</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">Costo de envío:</p>
                        <p className="m-0">Gratis</p>
                    </div>
                    <div className="d-flex justify-content-between border-top mt-3 pt-3">
                        <h3 className="fs-6 m-0">Total (IVA Incluido):</h3>
                        <p className="m-0 text-danger">${0}</p>
                    </div>
                </div>
                    <p className="m-0 my-2">*Los precios aplican de acuerdo a forma de pago</p>
                <div className="">
                        <button className="btn btn-primary rounded-0 w-100 py-2 ">Comprar</button>
                </div>
            </div>
        </div>
        </>
    )
}