import React from 'react'
import { Link } from 'react-router-dom'

export default function DeliveryScreen() {
  return (
    <div>
      <div className="container2">
        <h5 class="font-color p-3 text-center">Order Type</h5>
        <div className="container2">
        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body ">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height1">
             
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div className="d-flex justify-content-between p-3">
                    <div className="">Total</div>
                    <div className=""></div>
                    
                  </div>
                  </div>
          </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                        <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height1">
             
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
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
        </div>
        
        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height">
             
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div className="d-flex justify-content-between p-3">
                    <div className="">Net Total</div>
                    <div className=""></div>
                    
                  </div>
                  </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <form>
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
  </div>
</form>
        
      </div>
      <Link to={"/delivery"}>
      <div className='footer1'>
      <div className=' fixed-bottom p-3'>
            <div  className='d-flex justify-content-center'>
            <div className='footer-color content-footer'> Send Order to Whatsapp</div> 
            </div>
        </div>
      </div>
      </Link> 
    </div>
  )
}
