import React from 'react';
import Search from '../components/Search/Search';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     array: [],
        // }
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <h1>Image Clicker</h1>
                <Search enter={this.props.enter} />
            </div>
        )
    }
}

export default Splash;