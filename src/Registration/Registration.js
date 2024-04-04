import React from "react";
import { useFormik } from "formik";
import "./Registration.css";
import { Button } from "react-bootstrap";
import { registrationSchema } from "./RegistrationSchema";

const initialValues = {
  first: "",
  last: "",
  email: "",
  repassword: "",
  password: "",
};

const Registration = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      alert(
        "Form is valid now!. You can make a call to API inside onSubmit function"
      );
      action.resetForm();
    },
  });

  return (
    <div>
      <section
        class="p-5 w-100"
        style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div class="row">
          <div class="col-12">
            <div class="card text-black" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-3">
                        <h5 htmlFor="first" className="form-label">
                        Thiết lập ban đầu
                        </h5>
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Tổng thể tích (mL)
                          </label>
                          <input
                            id="total"
                            name="total"
                            className="form-control"
                          />
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Tốc độ
                          </label>
                          <input
                            id="speed"
                            name="speed"
                            className="form-control"
                       
                       
                          />
                          
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Đơn vị
                          </label>
                          <select name="unit"  className="form-control">
                            <option value="volvo">ml/h</option>
                            <option value="saab">giọt/m</option>
                          </select>
                          
                        </div>
                      </div>
                      <div className="row mt-3">
                        <h5 htmlFor="first" className="form-label">
                        Thời gian bắt đầu truyền
                        </h5>
                        <div className="col text-left">
                
                          <input
                            id="time"
                            name="time"
                            className="form-control"
                            type="time"
                            min="00:00" max="23:59"
                          />
                        
                        </div>
                        <div className="col text-left">
                     
                          <input
                            id="date"
                            name="date"
                            className="form-control"
                            type="date"
                          />
                        
                        </div>
                      </div>
                   
                      <div className="row mt-3">
                        <div className="col text-left actionButtons">
                       

                          <Button
                            variant="primary"
                            size="xl"
                            onClick={handleSubmit}
                          >
                            Tính Toán
                          </Button>
                        </div>
                      </div>
                   
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
