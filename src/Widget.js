import React, { useState } from 'react';
import './widget.css';
import up from './assets/upload.svg';
import alertSVG from './assets/alert.svg';
import Lottie from 'lottie-react';
import anim from './assets/success.json';

function Widget(props) {
  const [success, setSuccess] = useState(false);
  const [image, setimage] = useState({
    front: null,
    back: null,
  });

  function handlesubmit() {
    if (image.front && image.back) {
      setSuccess(true);
    } else {
      alert('Please upload file');
    }
  }

  return (
    <>
      <div id="kyc_widget" className="container px-5">
        {!success && (
          <div className="row">
            <div className="col-6 w_left">
              <h2 className="my-3">Document Upload</h2>

              <div className="mt-4 mb-5">
                <p>Select Any Govt Approved ID</p>
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
                      onChange={(e) =>
                        setimage((p) => ({ ...p, front: e.target.files[0] }))
                      }
                    />
                    <label for="front" className="uploadBtn">
                      <img src={up} alt="upload_icon" />
                      Upload File
                    </label>
                    <span className="fname">{image.front?.name}</span>
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
                      onChange={(e) =>
                        setimage((prev) => ({
                          ...prev,
                          back: e.target.files[0],
                        }))
                      }
                    />
                    <label for="back" className="uploadBtn">
                      <img src={up} alt="upload_icon" />
                      Upload File
                    </label>
                    <span className="fname">{image.back?.name}</span>
                  </div>
                </div>
              </div>
              <p className="p-2">Supported Files : jpeg, jpg, png</p>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <div className="prev_screen px-5 mt-5">
                {(!image.front || !image.back) && (
                  <div className="alert_warn">
                    <img src={alertSVG} alt="alert-icon" />
                    Alert!
                    <p>
                      Please upload both sides to <br /> check the preview
                    </p>
                  </div>
                )}
                {image.front && image.back && (
                  <div className="preview">
                    <p className="highlight">Front Side</p>
                    <img src={URL.createObjectURL(image.front)} alt="front" />

                    <p className="highlight">Back Side</p>
                    <img src={URL.createObjectURL(image.back)} alt="front" />
                  </div>
                )}
              </div>
              <div className="my-3 text-right">
                <div className="btn btn-next" onClick={handlesubmit}>
                  Submit
                </div>
              </div>
            </div>
          </div>
        )}

        {success && (
          <div className="row mt-5">
            <div className="col-12 mt-2">
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <Lottie
                  animationData={anim}
                  loop={false}
                  style={{ height: 200 }}
                  onComplete={() => {
                    setTimeout(() => {
                      props.trigger(false);
                    }, 1000);
                  }}
                />
              </div>
            </div>
            <div className="col-12">
              <h3>Submitted Successfully</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Widget;
