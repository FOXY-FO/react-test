import React from 'react';
import styles from './DateFilter.module.css';
import From from "./From/From";
import To from "./To/To";
import GroupByContainer from "./GroupBy/GroupByContainer";

const DateFilter = props => {
    return <>
        <div className={styles.item}><From/></div>
        <div className={styles.item}><To/></div>
        <div className={styles.item}><GroupByContainer/></div>


    </>
};

export default DateFilter;