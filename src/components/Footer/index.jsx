export default function Footer() {
  return (
    <>
      <footer className="footer-container seccions m-auto px-3 px-lg-4  mt-3 mt-md-5">

        <div className="container-fluid p-2 py-md-3 d-flex justify-content-between gap-3 flex-wrap">
            <div className="">
                <h3 className="fs-5">Vende</h3>
                <p className="">Vender en local Marketplace</p>
                <p className="">Foros</p>
                <p className="">Afilidados</p>
            </div>
            <div>
                <h3 className="fs-5">Acerca</h3>
                <p>Sobre nosotros</p>
                <p>Privacidad</p>
                <p>Terminos y Condiciones</p>
            </div>
            <div className="">
                <h3 className="fs-5">Ayuda</h3>
                <p>Centro de ayuda </p>
                <p>Quejas y sugerencias</p>
                <div className="redes-lm d-flex">
                    <a href="https://www.facebook.com/LocalMarketplace-101507707707707/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/localmarketplace/" target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/instagram.png" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
        <div className="container-fluid py-2 mt-1 border-top">
            <p className="p-0 text-center">&copy; 2024 local Marketplace, Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
