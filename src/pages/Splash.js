import React from 'react';
import Search from '../components/Search';

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
                <h1>Clicky Game</h1>
                <Search />
                <button onClick={this.props.enter} style={{ margin: '20px 0 20px 0'}}>Enter</button>
            </div>
        )
    }
}

export default Splash;