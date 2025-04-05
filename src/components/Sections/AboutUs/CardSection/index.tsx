import React from 'react';
import styles from './CardSection.module.css';
import { Section } from '../../../../types/ContentData';

const CardSection: React.FC<Section> = ({ heading, items }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.subheading}>{heading}</h3>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardSection;
