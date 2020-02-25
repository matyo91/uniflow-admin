import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>

                <Link to="/programs/" className="btn btn-primary">
                    Show programs
                </Link>
            </div>
        );
    }
}

export default Welcome;
