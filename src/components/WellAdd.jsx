import React, { Component } from 'react';
import Navbar from './shared/Navbar';
import axios from 'axios';



class WellAdd extends Component {
    state = {
        wellName: null,
        id: null,
        uwid: null,
        licenseNumber: null,
        status: null,
        field: null,
        totalDepth: null,
        drillDate: null,
        area: null
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const well = this.state;
        axios({
            method: 'post',
            url: 'https://mcdan-coding-exercise.azurewebsites.net/api/v1/well',
            data: well,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }


    render() {
        return (
            <React.Fragment>
                <Navbar />
                <form action="submit" onSubmit={this.handleSubmit}>
                    <label >
                        Well Name:
                    <input type="text" id="wellName" onChange={this.handleChange} />
                    </label>
                    <label >
                        id:
                    <input type="text" id="id" onChange={this.handleChange} />
                    </label>
                    <label >
                        uwid:
                    <input type="text" id="uwid" onChange={this.handleChange} />
                    </label>

                    <button type="submit"> submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default WellAdd;