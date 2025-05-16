import React from "react";
import { LinkButtonProps } from '../../../types/LinkButton'
import { NavLink } from "react-router-dom";
import styles from "./LinkButton.module.css"; 


const LinkButton: React.FC<LinkButtonProps> = ({ path, title, className = "" }) => {
    return (
        <NavLink to={path} className={styles.linkBtn}>
            <button className={`${styles.button} ${className}`}>{title}</button>
        </NavLink>
    );
};

export default LinkButton;
