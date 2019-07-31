import React from 'react';
import styles from './From.module.css';

const From = props => {


    return (
        <>
            <label htmlFor="FromFilter">From</label>
            <input id="FromFilter" type="date"/>
        </>
    )
};

export default From;