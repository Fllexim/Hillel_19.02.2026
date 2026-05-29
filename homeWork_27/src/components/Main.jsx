const Main = () => {
  return (
    <div className="min-vh-100">
      <div className="container">
        <h1 className="text-center mb-3 pt-4">ToDoList</h1>

        <form className="d-flex justify-content-center my-4 p-2 bg-white gap-2 rounded-3">
          <input type="text" name="value" required className="form-control" />

          <button className="btn btn-success">Додати</button>
        </form>

        <ul className="list-group w-75 mx-auto"></ul>
      </div>

      <div className="modal fade" tabIndex="-1" id="taskModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Ваше завдання</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>Текст завдання</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
