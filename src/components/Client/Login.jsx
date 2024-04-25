
export default function Login(){
    return(
        <div className="">
            <div className="text-center  px-3">
                <h2 className="border-bottom fs-1 py-2">Iniciar sesión</h2>
            </div>
          <form className="mt-2">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control "
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput" style={{ width: "100%" }}>
                Email address
              </label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword" style={{ width: "100%" }}>
                Password
              </label>
            </div>
            <p>¿Aun no tienes cuenta? <span>Registrate</span></p>
            <button
              type="submit"
              className="btn rounded-0 btn-primary w-100 mt-3"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
    )
}