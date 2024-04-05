import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";


const BaseDate = () => {

    const [total, setTotal] = useState();
    const [speed, setSpeed] = useState();
    const [time, setTime] = useState("00:00");
    const [date, setDate] = useState(null);
    const [timeEnd, setTimeEnd] = useState("");
    const [dateEnd, setDateEnd] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
     
  
        const _time = (new Date(`${dateEnd} ${timeEnd}`).getTime()  - new Date(`${date} ${time}`).getTime() ) / 3600000;

        setTotal(_time * speed);
      };
    return (
        <div className="card-body p-md-5" >
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                   
                    <form onSubmit={handleSubmit}>
                      <div className="row mt-3">
                      
                        <div className="col text-left">
                          <label htmlFor="last`" className="form-label">
                            Tốc độ (mL/h)
                          </label>
                          <input
                             type="number"
                            className="form-control"
                            value={speed}
                            onChange={(e)=>{
                              setSpeed(e.target.value)
                            }}
                            min={0}
                            required
                          />
                          
                        </div>
              
                      </div>
                      <div className="row mt-3">
                        <h5 htmlFor="first" className="form-label">
                        Thời gian bắt đầu truyền
                        </h5>
                        <div className="col-4 text-left">
                
                          <input
                            className="form-control"
                            type="time"
                            min="00:00" max="23:59"
                            value={time}
                            onChange={(e)=>{setTime(e.target.value)}}
                            required
                          />
                        
                        </div>
                        <div className="col text-left">
                          <input
                            className="form-control"
                            type="date"
                            value={date}
                            onChange={(e)=>{setDate(e.target.value)}}
                            required
                          />
                        
                        </div>
                      </div>
                      <div className="row mt-3">
                        <h5 htmlFor="first" className="form-label">
                        Thời gian kết thúc
                        </h5>
                        <div className="col-4 text-left">
                
                          <input
                            className="form-control"
                            type="time"
                            min="00:00" max="23:59"
                            value={timeEnd}
                            onChange={(e)=>{setTimeEnd(e.target.value)}}
                            required
                          />
                        
                        </div>
                        <div className="col text-left">
                          <input
                            className="form-control"
                            type="date"
                            value={dateEnd}
                            onChange={(e)=>{setDateEnd(e.target.value)}}
                            required
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
                              <tr className="table-success">
                                <th scope="row">Tổng thể tích</th>
                                <td>{total} (mL)</td>
                              </tr>
                              
                  
                            </tbody>
                   </table>
                      
                  </div>
                </div>
              </div>
    )
}


export default BaseDate;