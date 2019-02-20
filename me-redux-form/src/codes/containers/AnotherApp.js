import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'


class GitUser extends React.Component{
  componentDidMount(){
    this.props.fetchTheUser();
  }
  
  render(){
    // const Loading = (<p>صبر کنید ...</p>);
    const { theUser } = this.props;
    return(
      <>
        <p>{theUser.name}</p>
        <img src={theUser.items.avatar_url} alt={`img of ${theUser.name}`} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  theUser: state.fetchUserReducer
});

const mapDispatchToProps = dispatch => ({
  fetchTheUser: () => dispatch(fetchPost('marzzy'))
});

export default connect(mapStateToProps, mapDispatchToProps)(GitUser)