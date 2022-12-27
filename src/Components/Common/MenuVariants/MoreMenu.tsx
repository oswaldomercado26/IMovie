import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";


const Moremenu:FC = () => {
    const data = [
        {text: 'Salón de la Fama', url: '/leaderboard'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default Moremenu;