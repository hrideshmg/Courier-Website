import React from 'react';

import DeliveryMan from './Images/deliveryman.png'
const FindUs = () => {
  return (
    <section style={{'background-color': '#1B262C'}}>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card bg-dark text-white py-4 py-sm-0"><img className="w-100" src={DeliveryMan} />
                <div className="card-img-overlay bg-dark-gradient d-flex flex-column flex-center">
                  <h1 style={{color: '#3282B8'}}>FASTEST DELIVERY</h1>
                  <p className="text-center">You can get your valuable item in the fastest period of<br className="d-none d-sm-block" />time with safety. Because your emergency<br className="d-none d-sm-block" />is our first priority.</p><a className="stretched-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"></a>   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>
  );
};

export default FindUs;
