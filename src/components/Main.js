


import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Model';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal : false,
        user: null,
        error: null
      }
    }
    

    openModal = () => {
      this.setState({showModal : true})
    }

    closeModal = () => {
      this.setState({showModal : false})
    }
    componentDidMount() {
      fetch('https://api.github.com/users/codeNinja')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching user data from GitHub API');
          }
          return response.json();
        })
        .then(user => {
          this.setState({ user });
        })
        .catch(error => {
          this.setState({ error: error.message });
        });
    }

    render() {
      const { showModal } = this.state;
      let modalContent = null;
      const { user, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!user) {
      return <p>Loading...</p>;
    }

      if(showModal) {
        modalContent = (
        <Modal children={modalContent}>
         <h2>GitHub User</h2>
        <p>Username: {user.login}</p>
        <p>Name: {user.name}</p>
        <p>AvatarURL: {user.avatar_url}</p>
        <img src={user.avatar_url} height={250} width={250} />
        <p>Location: {user.location}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Type: {user.type}</p>
        
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
        )
      }

      return(
        <div className="App">
          <div className='grid-container '>
            <div>
            <img src={user.avatar_url} height={200} width={200} />
            <br />
            <label>codeNinja</label>
            <br />
          <button onMouseOver={this.openModal}>View profile</button>
          {modalContent}
          </div>
          <div>
          <img src={user.avatar_url} height={200} width={200} />
            <br />
          <button onMouseOver={this.openModal}>View profile</button>
          {modalContent}
          </div>
          <div>
          <img src={user.avatar_url} height={200} width={200} />
            <br />
          <button onMouseOver={this.openModal}>view profile</button>
          {modalContent}
          </div>
        </div>
        </div>
      )
    }
}

export default Main

/*
import React, { Component } from 'react';

class GitHubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/codeNinja')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching user data from GitHub API');
        }
        return response.json();
      })
      .then(user => {
        this.setState({ user });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { user, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!user) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>GitHub User</h2>
        <p>Username: {user.login}</p>
        <p>Name: {user.name}</p>
        <p>AvatarURL: {user.avatar_url}</p>
        <img src={user.avatar_url} height={250} width={250} />
        <p>Location: {user.location}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Type: {user.type}</p>
        
       
        </div>
        );
      }
    }
    
    export default GitHubUser; */