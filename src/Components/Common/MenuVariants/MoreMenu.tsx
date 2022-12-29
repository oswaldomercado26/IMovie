import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

//funciones desplegables que se van hacer para el añadir peliculas
const Moremenu:FC = () => {
    const data = [
        {text: 'Salón de la Fama', url: '/leaderboard'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default Moremenu;