import React, { Component } from 'react'
import styles from "./styles.module.css"
import InfoInput from "../InfoInput"


export class CreateUser extends Component {
    state = {
        name: "",
        age: "",
        email: "",
        password: "",
        isUpdating: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, age, email, password } = this.state;
        this.props.handleSubmit({
            name,
            age: Number(age),
            email,
            password
        });
        this.setState({
            name: "",
            age: "",
            email: "",
            password: "",
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        if (props.isUpdating !== state.isUpdating) {
          return {
            name: props.editedUser?.name ?? '',
            age: props.editedUser?.age ?? '',
            email: props.editedUser?.email ?? '',
            password: props.editedUser?.password ?? '',
            isUpdating: props.isUpdating
          }
        }
        return null;
    
      }

    render() {
        const { name, age, email, password } = this.state;
        const editType = this.state.isUpdating ? "Atnaujinti" : "Sukurti"
        return (
            <div>
                <h2>{editType} vartotoją</h2>

                <form onSubmit={this.handleSubmit}>
                    <InfoInput
                        name="name"
                        value={name}
                        handleChange={val => this.setState({ name: val })}
                    />
                    <InfoInput
                        name="age"
                        value={age}
                        handleChange={val => this.setState({ age: val })}
                    />
                    <InfoInput
                        name="email"
                        value={email}
                        handleChange={val => this.setState({ email: val })}
                    />
                    <InfoInput
                        name="password"
                        value={password}
                        handleChange={val => this.setState({ password: val })}
                    />
                    <button>{editType}</button>
                </form>
            </div>
        )
    }
}

export default CreateUser
