import React from 'react';
import ListItem from './ListItem';
import './ListWrapper.css'



const ListWrapper = (props) => (
    <>
    {console.log(props.items.length)}
    <ul className="listWrapper__wrapper">
    
    {props.items.length ? props.items.map(pojedynczy=> (
        <ListItem key={pojedynczy.name} {...pojedynczy}/>
    )) : (<h2 className="noItems">"There's nothing here yet, please add some items!" </h2>) }

        
    </ul>
    </>
)

export default ListWrapper;