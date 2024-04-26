import Login from "./Login";
import { useState } from "react";
import SingUp from "./Sing-up";

export default function Client() {

  const [changePanel, setChangePanel] = useState(true);

  const clickChangePanel=()=> setChangePanel(!changePanel);

  return (
    <>
      <section className="  mt-seccions-index ">
        <div className="seccions m-auto px-3 p-lg-4 py-4">
          <div className="container-client  d-flex align-items-center justify-content-center">
            {
              changePanel? <Login clickChangePanel={clickChangePanel}  /> : <SingUp clickChangePanel={clickChangePanel} />
            }
          </div>
        </div>
      </section>
    </>
  );
}
