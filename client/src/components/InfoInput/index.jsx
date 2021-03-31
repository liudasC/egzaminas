import React, { Component } from 'react'
import styles from "./styles.module.css"

export class InfoInput extends Component {
    render() {
        const { title, value, handleChange } = this.props;
        return (
            <div className={styles.InfoInput}>
                <input type="text"
                    id={title}
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                />
                <label htmlFor={title}>{title}</label>
            </div>
        )
    }
}

export default InfoInput
