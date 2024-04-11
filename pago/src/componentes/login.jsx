import React from "react";

const login = () => {
  return (
    <div>
      <>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <img
            className="pt-5"
            src="../pictures/Screenshot_2024-02-15_155144-removebg-preview 1.png"
            alt=""
          />
        </div>
        <section>
          <div className="container pt-4 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card text-white"
                  style={{ borderRadius: "1rem", backgroundColor: "#002c6a" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-4 mt-md-2 pb-2">
                      <h2 className="fw-bold mb-2">Log-In</h2>
                      {/* <p class="text-white-50 mb-5">Please enter your login and password!</p> */}
                      <div
                        data-mdb-input-init=""
                        className="form-outline form-white mb-4"
                      >
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                      </div>
                      <div
                        data-mdb-input-init=""
                        className="form-outline form-white mb-4"
                      >
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Contraseña
                        </label>
                      </div>
                      <p className="small mb-4 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </p>
                      <button
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Ingresar
                      </button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            fill="currentColor"
                            className="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                          </svg>
                        </a>
                        <a href="#!" className="text-white mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                          </svg>
                        </a>
                        <a href="#!" className="text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            fill="currentColor"
                            className="bi bi-google"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        ¿No tenés cuenta?{" "}
                        <a href="#!" className="text-white-50 fw-bold">
                          Registrate aquí
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default login;
