export default function AsideFilter() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column align-items-start gap-2">
        <div className="opacity-75 fw-semibold">Productos total:15</div>
              <select
                className="form-select rounded-1"
                aria-label="Default select example"
              >
                <option hidden>Tipo de producto</option>
                <option value="1">Sudadera</option>
                <option value="2">Jeans</option>
                <option value="3">Calzado</option>
              </select>
              <select
                className="form-select rounded-1"
                aria-label="Default select example"
              >
                <option hidden>Ordenar por</option>
                <option value="1">Nombre</option>
                <option value="2">Precio mayor</option>
                <option value="3">Precio menor</option>
              </select>
        </div>
      </div>
    </>
  );
}
