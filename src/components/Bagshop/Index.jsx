


//import ProductCard from './ProductCard';
import SubTotals from './SubTotals';
import EmptyCart from './EmptyCart';
import {CustomHook} from '../CustomHook';

export default function BagShop(){

 
    const { products} = CustomHook()
    console.log(products)
    let Subtotal = 0;
    let Discount = 0;
    return(
        <>
            <section className=" mt-seccions-index   ">
                <div className='eccions m-auto px-3 p-lg-4 py-4'>
                <div className="">
                    <h2 className="fs-1">Mi bolsa</h2>
                </div>
                <div className="row position-relative">
                    <div className="col-12 col-lg-8 ">
                        { products == 0 ? <EmptyCart /> : 
                        <div className="bg-white rounded">
                            <div className="py-2 d-none d-lg-flex">
                                <p className="col-6 m-0 text-center">Producto</p>
                                <p className="col-2 m-0 text-center">Precio</p>
                                <p className="col-3 m-0 text-center">Cantidad</p>
                                <p className="col-1 m-0 text-center">Total</p>
                            </div>
                            <div className="px-2">
                                
                            </div>
                        </div>}
                    </div>
                    <SubTotals Subtotal={Subtotal} Discount={Discount} />
                    
                </div>
                </div>
            </section>
        </>
    )
}