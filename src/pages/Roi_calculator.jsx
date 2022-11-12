import React, { useEffect, useState } from "react";

export default function Roi_calculator() {
  const [toggle, setToggle] = useState(false);
  const [cake, setCake] = useState(100);
  const [per, setPer] = useState();
  const [first, setFirst] = useState();

  useEffect(() => {
    setPer((9 / 100) * cake);
    setFirst(cake);
  }, [cake]);

  function handleToggle(e) {
    if (toggle === true) {
      setToggle(false);
    } else if (toggle === false) {
      setToggle(true);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="">
              <h3 className="d-flex flex-start">ROI Calculator</h3>
              <div className="d-flex flex-row-reverse mx-1">
                <p className="mx-1">USD</p>
                <div className="form-check form-switch ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="form-check-input bg-warning"
                  />
                </div>
                <p className="mx-2">CAKE</p>
                <i className="bi bi-person-circle mx-1"></i>
              </div>

              <input
                type="text"
                className="form-control "
                defaultValue={first}
              />

              <div className="d-flex justify-content-between">
                <div>
                  {" "}
                  <button
                    className="btn1"
                    onClick={(e) => setCake(cake + 1000)}
                  >
                    $1000
                  </button>
                  <button
                    className="btn1"
                    value="$100"
                    onClick={() => setCake(cake + 100)}
                  >
                    $100
                  </button>
                </div>
                <div>
                  <p>~ CAKE 0.000</p>
                </div>
              </div>
              <h5 className="d-flex flex-start">Timerframe</h5>
              <div>
                <button className="btn2 active">1 Day</button>
                <button className="btn2">7 Day</button>
                <button className="btn2">30 Day</button>
                <button className="btn2">1 Year</button>
                <button className="btn2">7 Year</button>
              </div>
              <div className="d-flex justify-content-between  align-items-center">
                <h5>Enable Accelerate APY</h5>
                <div className="form-check form-switch ">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="form-check-input bg-warning "
                  />
                </div>
              </div>
              <h6 className="d-flex flex-start select">Select Tier</h6>
              <div>
                <button className="btn2 active">Tier 1</button>
                <button className="btn2">Tier 2</button>
                <button className="btn2">Tier 3</button>
                <button className="btn2">Tier 4</button>
                <button className="btn2">Tier 5</button>
              </div>
              <p className="d-flex flex-row-reverse mx-4">
                ROI at Current Rates
              </p>
              <input type="text" className="form-control" defaultValue={per} />
              <p className="d-flex flex-row-reverse mx-4">
                ~0.000 CAKE + 0.000000 DON
              </p>
              <button className="btn" onClick={handleToggle}>
                {toggle ? "Hide Details ^" : "show Details "}
              </button>
              {toggle ? (
                <div>
                  <div className="apy d-flex justify-content-between">
                    <h4>APY</h4>
                    <p className="text-warning">9.0 %</p>
                  </div>
                  <div className="d-flex flex-start">
                    <ul>
                      <li>Calculated based on current rates</li>
                      <li>
                        All figyre are estimates provided for your convenience
                        only, and by no means represent guaranteed returns
                      </li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
