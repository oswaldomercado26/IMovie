import React, {FC} from 'react';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

//url de a donde sedirigen si se preciona el boton de salon de la fama
const PeopleMenu:FC = () => {
    const data = [{text: 'Gente popular', url: '/person'}];

    return (
        <DropdownMenu data={data}/>
    );
};

export default PeopleMenu;