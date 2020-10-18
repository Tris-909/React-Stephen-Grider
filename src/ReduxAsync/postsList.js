import React from 'react';
import { fetchPostsThunk, fetchUsersThunk } from './actions';
import { connect } from 'react-redux';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsThunk();
        this.props.fetchUsersThunk();
    }

    renderData = () => {
        if (this.props.posts.data !== undefined && this.props.users.data !== undefined ) {
            return this.props.posts.data.map((post) => {
                return(
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <h3> Name: { this.props.users.data[post.userId-1].name } </h3>
                    </div>
                </div>
                );
            });
        } else {
            return(
                <div className="ui segment">
                  <p></p>
                  <div className="ui active dimmer">
                    <div className="ui loader"></div>
                  </div>
                </div>
            );
        }
    }

    render() {
        console.log(this.props);
        return(
            <div className="ui inverted segment">
                <div className="ui inverted relaxed divided list">
                    {this.renderData()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
        postLoading: state.posts.isLoading,
        userLoading: state.users.isLoading,
        users: state.users.users
    }
}

export default connect(mapStateToProps, {fetchPostsThunk, fetchUsersThunk})(PostsList);