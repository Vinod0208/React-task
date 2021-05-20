import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      inputone: "",
      inputtwo: "",
      inputthree: "",
      inputfour: "",

      cardinput: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
      
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      cardinput: this.state.cardinput.concat(this.state),

    });
   
      
  }
  
  deleteUser = (index) => {
    this.state.cardinput.splice(index, 1);
    this.setState({
      cardinput: this.state.cardinput,
    });
  };
  render() {
    return (
      <>
        <div id="card">
          <h3 id="card_no">
            Card Number :
            <div id="flex">
              <span>
                <input
                  onChange={this.handleChange}
                  name="inputone"
                  value={this.state.email}
                  className="number"
                  type="text"
                  maxlength="4"
                  id="one"
                />
                <input
                  onChange={this.handleChange}
                  name="inputtwo"
                  value={this.state.name}
                  className="number"
                  type="text"
                  maxlength="4"
                  id="two"
                />
                <input
                  onChange={this.handleChange}
                  name="inputthree"
                  value={this.state.address}
                  className="number"
                  type="text"
                  maxlength="4"
                  id="three"
                />
                <input
                  onChange={this.handleChange}
                  name="inputfour"
                  value={this.state.phoneNo}
                  className="number"
                  type="text"
                  maxlength="4"
                  id="four"
                />
              </span>
            </div>
          </h3>
          <button id="btn" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <table className="table" align="center" width="80%">
          <thead>
            <tr bgcolor="skyblue">
              <th>Index</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="itemlist">
            {this.state.cardinput.map((xuser, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {xuser.inputone}-{xuser.inputtwo}-{xuser.inputthree}-{xuser.inputfour}
                  </td>

                  <td>
                    <button
                      className="btn"
                      onClick={this.deleteUser.bind(this, index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Card;
