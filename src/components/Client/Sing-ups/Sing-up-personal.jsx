/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSingupPersonalSchema } from "../../../Validations/userSchame";

export default function SingUpPersonal({ clickChangePanel, clickTypeAccount,typeAccount }) {

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(UserSingupPersonalSchema)
  })
  const onSubmit=async(data)=>{console.log("data",data)}

  return (
    <div className="container-user__client ">
      <div className="text-center  px-3">
        <h2 className="border-2 border-bottom fs-1 py-3">Registrate</h2>
      </div>
      <form className="mt-3" onSubmit={handleSubmit(onSubmit)} >
        <div className="d-flex pb-3 gap-3">
          <input
            type="radio"
            className="btn-check "
            name="options-base"
            id="0"
            autoComplete="off"
            checked={typeAccount}
            onClick={clickTypeAccount}
          />
          <label
            className="btn btn-outline-secondary rounded-0"
            style={{ width: "100%" }}
            htmlFor="0"
          >
            Personal
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options-base"
            id="1"
            autoComplete="off"
            checked={!typeAccount}
            onClick={clickTypeAccount}
          />
          <label
            className="btn btn-outline-secondary rounded-0"
            style={{ width: "100%" }}
            htmlFor="1"
          >
            Comercial
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control rounded-0 ${errors.fullName?.message && "is-invalid" } `}
            id="inputName"
            placeholder="name-example"
            {...register("fullName")}
          />
          <label htmlFor="inputName" style={{ width: "100%" }}>
            Nombre completo
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control rounded-0 ${errors.email?.message && "is-invalid" } `}
            id="inputEmail"
            placeholder="name@example.com"
            {...register("email")}
          />
          <label htmlFor="inputEmail" style={{ width: "100%" }}>
            Email address
          </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control rounded-0 ${errors.password?.message && "is-invalid" } `}
            id="inputPassword"
            placeholder="Password"
            {...register("password")}
          />
          <label htmlFor="inputPassword" style={{ width: "100%" }}>
            Password
          </label>
        </div>
        <p className=" m-0 mt-3 ">
          ¿Ya tienes cuenta?{" "}
          <a
            className="cp link-offset-2 link-underline link-underline-opacity-100"
            onClick={clickChangePanel}
          >
            Entrar
          </a>
        </p>
        <button type="submit" className="btn rounded-0 btn-primary w-100 mt-3">
          Crear cuenta personal
        </button>
      </form>
    </div>
  );
}
