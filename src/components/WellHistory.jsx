import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './shared/Navbar';



class WellHistory extends Component {
    state = {
        history: []
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://mcdan-coding-exercise.azurewebsites.net/api/v1/well/${params.id}/history`)
            .then(res => {
                this.setState({ history: res.data });
            });
    }

    render() {
        const historyList = this.state.history.map(well =>
            <div className="item" key={well.id}>
                <span className="item-title" >id</span>
                <span >{well.id}</span>

                <span className="item-title">changeDate</span>
                <span >{well.changeDate}</span>

                <span className="item-title">admin</span>
                <span >{well.admin}</span>

                <span className="item-title">adminId</span>
                <span >{well.adminId}</span>

                <span className="item-title">action</span>
                <span >{well.action}</span>

                <span className="item-title">wellId</span>
                <span >{well.wellId}</span>

                <span className="item-title">uwid</span>
                <span >{well.uwid}</span>
            </div>
        )

        return (
            <React.Fragment>
                <div>
                    <Navbar />
                    {historyList}
                </div>
            </React.Fragment>
        );
    }
}



export default WellHistory;