import React, { Component } from "react";
import axios from "axios";
import Navbar from "./shared/Navbar";

class Login extends Component {
  state = {
    login: {
      username: "",
      password: ""
    },
    user: {
      userName: "",
      token: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleSubmit = e => {
    
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(this.state.login.password);
    axios({
      method: "post",
      url:
        "https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/authenticate",
      data: user,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      this.setState({ user: res.data });
      console.log(res.data);
      localStorage.setItem("token", this.state.user.token);
    });
    
  };

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              id="username"
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              id="password"
              onChange={e => this.handleChange(e)}
            />
          </label>

          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

export default Login;
