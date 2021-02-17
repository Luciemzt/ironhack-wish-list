import React from 'react';

function Button ({wish, removedWish}){
return(
    <button className="button" onClick={() => deleteTask(wish)}>{removedWish}</button>
)
}


export default Button