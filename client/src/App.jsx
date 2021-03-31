import React from 'react';
import './App.css';
import API from "./api"
import UsersTable from "./components/UsersTable"

class App extends React.Component {
  state = {
    users: []
  }

  fetchUsers = () => {
    API.getUsers(users => this.setState({ users }), this.fetchError)
  }

  fetchError = error => {
    console.log(error);
    this.setState({ error });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
// console.log(this.state.users);
    return (
      <div className="App">
        <h1>Vartotojai</h1>
        <div>
          <UsersTable
            users={this.state.users}
          />

        </div>
      </div>
    );
  }
}

export default App;
