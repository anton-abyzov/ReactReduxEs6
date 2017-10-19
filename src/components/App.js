import React, { PropTypes, Component } from 'react';
import Header from './common/Header';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
                <p>Footer </p>
            </div>
        );
    }
}

App.PropTypes = {
    //children: PropTypes.object.isRequired
    // children: React.PropTypes.oneOfType([
    //     React.PropTypes.arrayOf(React.PropTypes.node),
    //     React.PropTypes.node
    //   ])
    children: React.PropTypes.node
};

export default App;