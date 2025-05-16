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
                        {typeof item === 'string' ? (
                            item
                        ) : (
                            <>
                                {item.text}
                                <ul className={styles.subList}>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex} className={styles.subListItem}>{subItem}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardSection;

