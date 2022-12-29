//Cuando usamos Typescript con React y queremos pasarle un children como prop a alguno de nuestros componentes, necesitamos indicar el type
import React, {FC} from 'react';
import styles from './DropdownMenu.module.css';
import List from '../../List/List';
import MenuItem from './MenuItem/MenuItem';
import {useSpring,animated} from 'react-spring';

type MenuData = {
    text: string,
    url: string,
    ActionOnClick?: () => {}
}

interface DropdownMenuProps {
    data: MenuData[]
}
// Los menús desplegables son superposiciones contextuales que se pueden alternar para mostrar listas de enlaces y más. 
const DropdownMenu: FC<DropdownMenuProps> = ({data}) => {
//crear animacion del menu
    const animatedMenu = useSpring({
        to:{
            transform:'scale(1)'
        },
        from:{
            transform:`scale(0)`,
        }
    });
//retornar las opciones que contiene el menu
    return (
        <animated.div className={styles.dropdown_menu} style={animatedMenu}>
                <List
                    items={data}
                    renderComponent={(el, i) => {
                        return <MenuItem key={i} url={el.url} text={el.text}/>
                    }}/>
        </animated.div>
    );
};

export default DropdownMenu;