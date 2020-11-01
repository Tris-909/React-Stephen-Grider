import React from 'react';
import UserHeader from './userHeader';
import { fetchPostsThunk } from './actions';
import { connect } from 'react-redux';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsThunk();
    }

    renderData = () => {
        if (this.props.posts[0] !== undefined) {

            return this.props.posts[0].map((post) => {
                return(
                    <div className="item" key={post.id}>
                        <div className="content">
                            <div className="header">{post.title}</div>
                            <UserHeader userId={post.userId} />
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
        posts: state.posts  
    }
}

export default connect(mapStateToProps, {fetchPostsThunk})(PostsList);