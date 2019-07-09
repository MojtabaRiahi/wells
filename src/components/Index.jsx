import React, { Component } from 'react';
import Navbar from './shared/Navbar';



class Index extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <h1>Home Page</h1>
            </div>
        );
    }
}



export default Index;