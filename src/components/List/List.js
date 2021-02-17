import React from 'react';

import ListItem from '../ListItem/ListItem'

function List ({wishes,setWishes}){
    return wishes.map(wish=>{
        <div className="cards-container">
        <ListItem = {wish} />

    </div>
    }) 

}
export default List 