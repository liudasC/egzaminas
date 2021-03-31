import React, { Component } from 'react'
import styles from "./styles.module.css"

export class UsersTable extends Component {

    usersRows = () =>
    this.props.users.map(({ id, name, age, email, password }) => {
        return (
            <tr key={id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>
                    <button onClick={() => this.props.updateUser(id)}>Atnaujinti</button>
                    <button onClick={() => this.props.deleteUser(id)}>Ištrinti</button>
                    </td>
                </tr>
            )
        }
    )

        render() {

        return (
            <div>
                <h2>Vartotojų sąrašas</h2>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <th>Vardas</th>
                            <th>Amžius</th>
                            <th>El. paštas</th>
                            <th>Slaptažodis</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.usersRows()}</tbody>
                </table>
            </div>
        )
    }
}

export default UsersTable
