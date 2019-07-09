import React, { Component } from 'react';


class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="nav">
                <a href="/" className="nav-item">
                    Home
                </a>
                <a href="/wells" className="nav-item">
                    Wells
                </a>
                <a href="/wells/add" className="nav-item">
                    Add Well
                </a>
                <a href="/admin/register" className="nav-item">
                    Register
                </a>
                <a href="/admin/authenticate" className="nav-item">
                    Login
                </a>
            </div>
        );
    }
}

export default Navbar;