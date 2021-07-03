import React from 'react';
import './widget.css';
import up from './assets/upload.svg';
import alert from './assets/alert.svg';

function Widget() {
  return (
    <>
      <div id="kyc_widget" className="container px-5">
        <div className="row">
          <div className="col-6 w_left">
            <h2 className="my-3">Document Upload</h2>

            <div className="mt-4 mb-5">
              <p>Select any Govt approved ID</p>
              <select className="form-control doc-select" name="doc">
                <option value="DL">Driving License</option>
                <option value="Aadhar">Aadhar Card</option>
              </select>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="upload">
                  <p>Upload Front Side</p>
                  <input
                    type="file"
                    name="front-side"
                    id="front"
                    accept="image/.jpeg,.jpg,.png"
                  />
                  <label for="front" className="uploadBtn">
                    <img src={up} alt="upload_icon" />
                    Upload File
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="upload">
                  <p>Upload Back Side</p>
                  <input
                    type="file"
                    name="back-side"
                    id="back"
                    accept="image/.jpeg,.jpg,.png"
                  />
                  <label for="back" className="uploadBtn">
                    <img src={up} alt="upload_icon" />
                    Upload File
                  </label>
                </div>
              </div>
            </div>
            <p className="p-2">Supported Files : jpeg, jpg, png</p>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="prev_screen mt-5">
              <div className="alert_warn">
                <img src={alert} alt="alert-icon" />
                Alert!
                <p>
                  Please upload both sides to <br /> check the preview
                </p>
              </div>
            </div>
            <div className="my-3 text-right">
              <div className="btn btn-next">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widget;
