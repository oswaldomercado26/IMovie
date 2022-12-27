import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";


const PeopleMenu:FC = () => {
    const data = [{text: 'Gente popular', url: '/person'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default PeopleMenu;