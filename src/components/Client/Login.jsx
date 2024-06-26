/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { userLoginSchema } from "../../Validations/userSchame"

export default function Login({clickChangePanel}){
  const {register,handleSubmit,formState:{errors}}= useForm({
    resolver: zodResolver(userLoginSchema)
  })

  const onSubmit=async(data) => {console.log("data",data)}
  
    return(
        <div className="container-user__client ">
            <div className="text-center  px-3">
                <h2 className="border-2 border-bottom fs-1 py-3">Iniciar sesión</h2>
            </div>
          <form className="mt-3 " onSubmit={handleSubmit(onSubmit)} >
            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control rounded-0 ${errors.email?.message && "is-invalid" } `}
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email")}
              />
              <label htmlFor="floatingInput" style={{ width: "100%" }}>
                Email address
              </label>
            </div>
            <div className="form-floating">
              <input
                type="password "
                className={`form-control rounded-0 ${errors.password?.message && "is-invalid"  } `}
                id="floatingPassword"
                placeholder="Password"
                {...register("password")}
              />
              <label htmlFor="floatingPassword" style={{ width: "100%" }}>
                Password
              </label>
            </div>
            <p className=" m-0 mt-3 ">¿Aun no tienes cuenta? <a className="cp link-offset-2 link-underline link-underline-opacity-100" onClick={clickChangePanel}  >Registrate</a></p>
            <button
              type="submit"
              className="btn  rounded-0 btn-primary w-100 mt-3"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
    )
}