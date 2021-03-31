import React, { Component } from 'react'
import styles from "./styles.module.css"

export class CreateUser extends Component {
    state = {
        name: "",
        age: "",
        email: "",
        password: "",
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


    render() {
        return (
            <div>
                <h2>Sukurti vartotoją</h2>
                <form >


                    <button>Sukurti</button>
                </form>
            </div>
        )
    }
}

export default CreateUser
