import React, { Component } from 'react';
import axios from 'axios';
import Well from './shared/Well';


class WellShowById extends Component {
    state = {
        wells: []
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://mcdan-coding-exercise.azurewebsites.net/api/v1/well/${params.id}`)
            .then(res => {
                this.setState({ wells: [res.data] });
            });
    }


    render() {
        return (
            <Well wells={this.state.wells} />
        );
    }
}



export default WellShowById;