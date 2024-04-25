
export default function SingUpPersonal(){
    return (
        <div className="container__client">
        <div className="text-center  px-3">
          <h2 className="border-bottom fs-1 py-2">Registrate</h2>
        </div>
        <form className="mt-2">
          <div className="d-flex py-3 gap-3">
            <input
              type="radio"
              className="btn-check "
              name="options-base"
              id="option5"
              autoComplete="off"
              checked
            />
            <label className="btn btn-outline-secondary rounded-0" style={{ width: "100%" }} htmlFor="option5">
              Personal
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options-base"
              id="option6"
              autoComplete="off"
            />
            <label className="btn btn-outline-secondary rounded-0" style={{ width: "100%" }} htmlFor="option6">
              Comercial
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="name-example"
            />
            <label htmlFor="inputName" style={{ width: "100%" }}>
              Nombre completo
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="inputEmail" style={{ width: "100%" }}>
              Email address
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword"
              placeholder="Password"
            />
            <label htmlFor="inputPassword" style={{ width: "100%" }}>
              Password
            </label>
          </div>
          <p>
            ¿Ya tienes cuenta? <span>Entrar</span>
          </p>
          <button
            type="submit"
            className="btn rounded-0 btn-primary w-100 mt-3"
          >
            Crear cuenta personal
          </button>
        </form>
      </div>
    )
}