import React, { Component } from 'react'
import styles from "./styles.module.css"

export class InfoInput extends Component {
    render() {
        const { title, value, handleChange } = this.props;
console.log(title, value);
        return (
            <div className={styles.InfoInput}>
                <label htmlFor={title}>{title}</label>
                <input type="text"
                    id={title}
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        )
    }
}

export default InfoInput
