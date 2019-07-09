import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './shared/Navbar';



class Register extends Component {
    state = {
        username: '',
        password: ''
    }



    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        };

        axios({
            method: 'post',
            url: 'https://mcdan-coding-exercise.azurewebsites.net/api/v1/admin/register',
            data: user,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }



    render() {
        return (
            <div>
                <Navbar />
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Username:
                    <input type="text" id="username" onChange={this.handleChange} />
                    </label>
                    <label >
                        Password:
                    <input type="text" id="password" onChange={this.handleChange} />
                    </label>

                    <button type="submit">submit</button>
                </form>
            </div >
        );
    }
}



export default Register;