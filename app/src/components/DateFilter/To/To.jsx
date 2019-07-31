import React from 'react';
import styles from "../From/From.module.css";

const To = props => {
    return (
        <>
            <label htmlFor="ToFilter">To</label>
            <input id="ToFilter" type="date"/>
        </>
    )
};



export default To;