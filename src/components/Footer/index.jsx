import { FaFacebook,FaInstagram   } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer className="footer-container   mt-3 mt-md-5">
        <div className=" seccions  m-auto px-3 px-lg-4 py-2  py-lg-4  d-flex justify-content-between gap-3 flex-wrap">
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
            <div className="redes-lm d-flex gap-2">
              <a
                href="https://www.facebook.com/LocalMarketplace-101507707707707/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://www.instagram.com/localmarketplace/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaInstagram  />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="seccions  m-auto px-3 px-lg-4  py-4  ">
            <p className="m-0 text-center">
              &copy; 2024 local Marketplace, Inc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
