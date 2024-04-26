

export default function DropdownMobil(){
    return(
        <>
        <div className="d-lg-none w-auto dropstart mt-1 position-absolute top-0 end-0 ">
            <div className=" dropdown-toggle fs-5 m-0 d-flex flex-column" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="bg-dark rounded-circle"></span>
                <span className="bg-dark rounded-circle"></span>
                <span className="bg-dark rounded-circle"></span>
            </div>
            <ul className="dropdown-menu shadow ">
                <li><a className="dropdown-item">Comprar ahora</a></li>
                <li><a  className="dropdown-item">Eliminar</a></li>
            </ul>
        </div>
        </>
    )
}