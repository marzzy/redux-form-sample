import React from 'react';
import { connect } from 'react-redux';
// import { fetchPost } from '../sagas'
import { requestUser } from '../actions'



class GitUser extends React.Component{
  componentDidMount(){
    this.props.fetchTheUser('marzzy');
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
  fetchTheUser: () => dispatch(requestUser)
});

export default connect(mapStateToProps, mapDispatchToProps)(GitUser)