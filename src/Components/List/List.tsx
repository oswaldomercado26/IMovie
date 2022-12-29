import React from 'react';

//crear la interdace de las listas
interface ListProps<T> {
    items:T[],
    renderComponent:(component:T,i:number)=>React.ReactNode
}
//ListProps: crea las propiedades de las listas 
function List<T>(props:ListProps<T>){
    return <div >
        {props.items.map(props.renderComponent)}
    </div>
}

export default List;