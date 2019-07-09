import React, { Component } from 'react';
import axios from 'axios';
import Well from './shared/Well';
import QueryString from 'query-string'

class GetWellByUWID extends Component {
    state = {
        wells: []
    }

    componentDidMount() {
        const param= QueryString.parse(this.props.location.search)
        axios.get(`https://mcdan-coding-exercise.azurewebsites.net/api/v1/well?uwid=${param.uwid}`)
            .then(res => {
                this.setState({ wells: res.data });
            });
            console.log(this.state.wells)
    }


    render() {
        console.log(this.state.wells)
        return (
            <Well wells={this.state.wells} />
        );
    }
}



export default GetWellByUWID;