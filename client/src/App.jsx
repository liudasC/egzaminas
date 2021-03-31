import React from 'react';
import './App.css';
import API from "./api"
import UsersTable from "./components/UsersTable"
import CreateUser from "./components/CreateUser"

class App extends React.Component {
  state = {
    users: [],
    editedUserId: null,
    error: null
  }
  // GET
  fetchUsers = () => {
    API.getUsers(users => this.setState({ users }), this.fetchError)
  }

  fetchError = error => {
    console.log(error);
    this.setState({ error });
  }
  editUser = id => {
    this.setState({ editedUserId: id === this.state.editedUserId ? null : id })
  }

  // CREATE
  createUser = body => {
    API.createUser(body, this.fetchUsers, this.fetchError)
  }

  // UPDATE
  saveUser = body => {
    API.updateUser(this.state.editedUserId, body, this.fetchUsers, this.fetchError)
  }

  // DELETE
  deleteUser = id => {
    API.deleteUser(id, this.fetchUsers, this.fetchError)
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    // console.log(this.state.users);
    console.log(this.state.editedUserId);
    return (
      <div className="App">
        <h1>Vartotojai</h1>
        <div className="Display">
          <UsersTable
            users={this.state.users}
            deleteUser={this.deleteUser}
            updateUser={this.editUser}
          />

          <CreateUser
            handleSubmit={this.state.editedUserId ? this.saveUser : this.createUser}
            isUpdating={Boolean(this.state.editedUserId)}
            editedUser={this.state.editedUserId ? this.state.users.find(user => user.id === this.state.editedUserId) : null}
          />
        </div>
      </div>
    );
  }
}

export default App;
