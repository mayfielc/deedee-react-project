import React from 'react';
import Login from './components/Login/Login';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    username: null
  }
  handleLogin = (authRes) => {
  this.setState({
    username: authRes.profileObj.name
  }) 
  }
  
  render() {
    
    return (
      <div>
        {
          this.state.username ?
          (
            <h1>{this.state.username} LOGGED IN</h1>
          ) 
          : (
            <Login
              handleLogin={this.handleLogin}
            />
            )

        }
      </div>
      )
  }
}

export default App;
