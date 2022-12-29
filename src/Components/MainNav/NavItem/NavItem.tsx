import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
// @ts-ignore
import styles from './NavItem.module.css'

//crear interface del navitem
interface NavItemProps {
    text: string | undefined
    url: string
    addStyle?: string
}
// El componente <Nav.Item> se utiliza con fines de navegación en un sitio web. Un <Nav.Item> comparte un componente de navegación general y sus estilos asociados
const NavItem: FC<NavItemProps> = ({text, url, addStyle, children}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const computedStyles = addStyle ? `${addStyle} ${styles.wrapper}` : styles.wrapper;


    return (
        <div
        //El onmouseoverevento ocurre cuando el puntero del mouse ingresa a un elemento .
            onMouseOver={() => {
                setOpenMenu(true)
            }}
            onMouseLeave={() => {
                setOpenMenu(false)
            }}
            className={computedStyles}
        >
            <NavLink to={url}>{text}</NavLink>

            <div className={styles.children}>
                {openMenu && children}
            </div>
        </div>
    );
};

export default NavItem;





