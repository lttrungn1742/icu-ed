import React from "react";
import "./Registration.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import moment from "moment";


const Registration = () => {
  const [total, setTotal] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [unit, setUnit] = useState("ml/h");
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [timeEnd, setTimeEnd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
 

    if(time && date) {
      const [hour, minute] = time.split(":");

      var timeData = moment(date).set({hour: hour, minute});
 
      timeData.add(total / speed * 60, 'minutes')
    
      console.log("timeData ", timeData.format("DD/MM/YYYY hh:mm"))
      setTimeEnd(timeData.format("hh:mm DD/MM/YYYY"))
    }
  };

  return (
    <div>
      <section
        className="p-5 w-100"
        style={{  borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row">
 
          <div className="col-12">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                   
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-3">
                        <h5 htmlFor="first" className="form-label">Thiết lập ban đầu </h5>
                        <div className="col text-left">
                          <label htmlFor="first" className="form-label">
                            Tổng thể tích (mL)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={total}
                            onChange={(e) => {
                              setTotal(e.target.value)
                            }}
                            min={0}
                          />
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Tốc độ
                          </label>
                          <input
                             type="number"
                            className="form-control"
                            value={speed}
                            onChange={(e)=>{
                              setSpeed(e.target.value)
                            }}
                            min={0}
                          />
                          
                        </div>
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Đơn vị
                          </label>
                          <select value={unit} onChange={(e)=>{setUnit(e.target.value)}} name="unit"  className="form-control">
                            <option value="mL/h">mL/h</option>
                          </select>
                          
                        </div>
                      </div>
                      <div className="row mt-3">
                        <h5 htmlFor="first" className="form-label">
                        Thời gian bắt đầu truyền
                        </h5>
                        <div className="col text-left">
                
                          <input
                            className="form-control"
                            type="time"
                            min="00:00" max="23:59"
                            value={time}
                            onChange={(e)=>{setTime(e.target.value)}}
                          />
                        
                        </div>
                        <div className="col text-left">
                          <input
                            className="form-control"
                            type="date"
                            value={date}
                            onChange={(e)=>{setDate(e.target.value)}}
                          />
                        
                        </div>
                      </div>
                   
                      <div className="row mt-3">
                        <div className="col text-left actionButtons">
                          <Button
                            variant="primary"
                            size="xl"
                            type="submit"
                          >
                            Tính Toán
                          </Button>
                        </div>
                      </div>
                   
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                   <table className="table table-striped table-bordered table-hover">
                            <thead>
                              <tr className="table-active">
                                <th  scope="col">Tên</th>
                                <th  scope="col">Chỉ số</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Tổng thể tích</th>
                                <td>{total} (mL)</td>
                              </tr>
                              <tr>
                                <th scope="row">Tốc độ truyền</th>
                                <td>{speed} ({unit})</td>
                              </tr>
                              <tr className="table-success">
                                <th scope="row">Thời gian kết thúc</th>
                                <td>{timeEnd}</td>
                              </tr>
                            </tbody>
                   </table>
                      
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
