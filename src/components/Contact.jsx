import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      FullName: "",
      Phone: "",
      Email: "",
      Comments: "",
    };
  }
  InputEventF = (event) => {
    this.setState({
      FullName: event.target.value,
    });
  };
  InputEventP = (event) => {
    this.setState({
      Phone: event.target.value,
    });
  };
  InputEventE = (event) => {
    this.setState({
      Email: event.target.value,
    });
  };
  InputEventC = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };
  formSubmit = (event) => {
    alert(
      `Name=${this.state.FullName},Phone=${this.state.Phone},Email=${this.state.Email},Comments=${this.state.Comments}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={this.formSubmit}>
                <div className="form-group">
                  <label>FullName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="FullName"
                    value={this.state.FullName}
                    onChange={this.InputEventF}
                    placeholder="Enter your name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="Phone"
                    value={this.state.Phone}
                    onChange={this.InputEventP}
                    placeholder="Enter your contact no."
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.InputEventE}
                    placeholder="name@example.com"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Comments/Queries</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="Comments"
                    value={this.state.Comments}
                    onChange={this.InputEventC}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary mb-2 text-center justify-items-center"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default Contact;
