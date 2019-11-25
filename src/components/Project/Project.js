import React, { Component } from 'react';
import "./Project.css";

class Project extends Component {
    render() {
        const { now_contents } = this.props;
        return (
            <div>
                {now_contents}
            </div>
        );
    }
}

export default Project;