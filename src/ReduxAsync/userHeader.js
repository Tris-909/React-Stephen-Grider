import React from 'react';
import {connect} from 'react-redux';
import {fetchUsersThunk} from './actions';

class UserHeader extends React.Component {    
    componentDidMount() {
        this.props.fetchUsersThunk(this.props.userId);
    }

    render() {       
       if (!this.props.user) {
           return null;
       }

        return(<div>{this.props.user.name}</div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId),
        Ids: state.uniqueId
    }
}


export default connect(mapStateToProps, {fetchUsersThunk})(UserHeader);