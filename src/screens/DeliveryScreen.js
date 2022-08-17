import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/horizontal.css";


export default function DeliveryScreen() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="container2">
        <h5 class="font-color p-3 text-center">Order Type</h5>
        <div className="container2">
          <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div class="card-body ">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Delivery
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between p-3">
                          <div className="">Total</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div class="card curve shadow p-0 mb-0 bg-white rounded ">
                        <div class="card-body height1">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              onClick={() => setShow(prev => !prev)}/>
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              Delivery
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between p-3">
                          <div className="">Total</div>
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show &&  <h5 class="font-color1 p-3 text-left">Select pickup time :</h5>}
       

        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height">
              {/* horizontal time card  */}
              
              {show &&  <div class="row flex-nowrap overflow d-flex justify-content-center mb-5">
      
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-1">
           
          
        <img class="card-img-top" src="images/2.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">Burger</p>
        <a class="link" href="#list-item-2">
        <img class="card-img-top" src="images/3.jpg" alt="Card image cap" /></a>
      </div>
      
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">Drinks</p>
        <a class="link" href="#list-item-3">
        <img class="card-img-top" src="images/4.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-4">
        <img class="card-img-top" src="images/5.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">Drinks</p>
        <a class="link" href="#list-item-5">
        <img class="card-img-top" src="images/6.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-6">
        <img class="card-img-top" src="images/3.jpg" alt="Card image cap" /></a>
      </div>
      <div class="col-4 col-lg-2 col-sm-2 col-md-2">
        <p class="card-text">pizza</p>
        <a class="link" href="#list-item-4">
        <img class="card-img-top" src="images/4.jpg" alt="Card image cap" /></a>
      </div>
      
    </div> }
             

              {/* horizontal time card end  */}
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
              <div className="d-flex justify-content-between p-3">
                <div className="">Net Total</div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1"></div>
        {/* <div className="container2">
        <form>
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
  </div>
</form>
        
      </div> */}
        <div className="container2">
          <div className=" fixed-bottom p-3">
            <div className="d-flex justify-content-center">
              <div className="footer-color content-footer">
                {" "}
                Send Order to Whatsapp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
