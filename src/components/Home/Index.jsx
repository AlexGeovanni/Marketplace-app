import Header from "../Header/Index";

export default function Home(){
    return(
        <>
            <Header />
            <section className="bg-danger hv-100">
                <div className="d-flex align-itemes-center
                    jutify-content-start"> 
                <h1>marketplace</h1>
                <div className="mt-3">
                 <p>Solo para Tijuana,BC.</p>
                 <button type="button" 
                    className+"btn btn-primary mt-1">
                    Registrate
                 </button>
                  
                </div>
                </div>
            </section>
        </>
    )
}