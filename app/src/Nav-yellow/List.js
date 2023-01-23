import React from 'react';
import styles from './Menu.module.css'







const List = (props) => {
    return(
        <ul>
            {props.items.map((item)=>(
                <li className={styles.item} key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

};

export default List;
