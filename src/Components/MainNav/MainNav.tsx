import React, {FC} from 'react';
import styles from './MainNav.module.css'
import NavItem from './NavItem/NavItem';
import MovieMenu from "../Common/MenuVariants/MovieMenu";
import TVmenu from "../Common/MenuVariants/TVmenu";
import PeopleMenu from "../Common/MenuVariants/PeopleMenu";
import Moremenu from "../Common/MenuVariants/MoreMenu";

//poner las opciones que van dentro del navbar

const MainNav:FC = () => {

    return (
        <div className={styles.wrapper}>
            <NavItem text={'Películas'} url={'/movies/option/popular'}>
                <MovieMenu/>
            </NavItem>
            <NavItem text={'Series'} url={'/tv/option/popular'}>
                <TVmenu/>
            </NavItem>
            <NavItem text={'Actores'} url={'person'}>
                <PeopleMenu/>
            </NavItem>
            <NavItem text={'add'} url={'#'}>
                <Moremenu/>
            </NavItem>
        </div>
    );
};

export default MainNav;

