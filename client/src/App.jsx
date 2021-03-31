import React from 'react';
import './App.css';
import API from "./api"
import UsersTable from "./components/UsersTable"
import CreateUser from "./components/CreateUser"

class App extends React.Component {
  state = {
    users: [],
    editedUserId: null
  }
  // GET
  fetchUsers = () => {
    API.getUsers(users => this.setState({ users }), this.fetchError)
  }

  fetchError = error => {
    console.log(error);
    this.setState({ error });
  }



  // DELETE
  deleteUser = (id) => {
    API.deleteUser(id, this.fetchUsers, this.fetchError)
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    // console.log(this.state.users);
    return (
      <div className="App">
        <h1>Vartotojai</h1>
        <div className="Display">
          <UsersTable
            users={this.state.users}
            deleteUser={this.deleteUser}
          />

          <CreateUser
            handleSubmit={this.state.editedUserId ? this.saveUser : this.createUser}
          />
        </div>
      </div>
    );
  }
}

export default App;
