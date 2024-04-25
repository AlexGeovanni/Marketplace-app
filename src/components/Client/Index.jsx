import Footer from "../Footer";
import SingUpPersonal from "./Sing-up-personal";

export default function Client() {
  return (
    <>

    <section className="seccions m-auto px-3 p-lg-4 py-4">
      <div className="container-client d-flex align-items-center justify-content-center">
        <SingUpPersonal />
      </div>
    </section>
    <Footer />
    </>
  );
}
