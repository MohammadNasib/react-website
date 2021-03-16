import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  const [val, setVal] = useState({
    email: "",
    message: "",
  });

  const submitFunc = () => {
    console.log(`${val.email} ${val.message}`);
  };

  const onCngFunc = (e) => {
    const { value, name } = e.target;

    setVal((preVals) => {
      return {
        ...preVals,
        [name]: [value],
      };
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Let's Talk </h1>
      </div>

      <div className="container-fluid conDiv" >
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitFunc} className="mb3">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={onCngFunc}
                  value={val.email}
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="textarea" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="Message"
                  name="message"
                  onChange={onCngFunc}
                  value={val.message}
                  placeholder="Convey your  message ..."
                  required
                />
              </div>
              <NavLink to="#" type="submit" className="button">
                Submit
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
