import React from 'react';

const FindMe = () => {
  return (
    <section id="findUs" style={{'background-color': '#1B262C'}}>
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5 mb-6 text-center">
                <h5 style={{color:'white'}}>FIND US</h5>
                <h2 style={{color:'white'}}>Access us easily</h2>
            </div>
            <div className="col-12">
                <div className="card card-span rounded-2 mb-3">
                    <div className="row">
                            <iframe className="w-100 fit-cover rounded-md-start rounded-top rounded-md-top-0" src="/map.html"frameborder="0" style={{'height': '430px'}}></iframe>
                      </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary px-5" style={{'background-color': '#3282B8','border-color': '#3282B8'}}type="submit"><i className="fas fa-phone-alt me-2"></i><a className="text-light" href="tel:123-456789">Call us to delivery 123-456789</a></button>
          </div>
        </div>
    </div>
</section>
  );
};

export default FindMe;
