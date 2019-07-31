import React from 'react';
import Data from "./Data";
import {connect} from "react-redux";

class DataContainer extends React.Component {
    render() {
        return <Data {...this.props} />
    }
}

const mapStateToProps = state => {
    return {

    }
};

export default connect(mapStateToProps)(DataContainer);