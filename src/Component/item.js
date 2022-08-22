import React from 'react'

 function Item({text, remove, update}) {
    return (
        <div className="item">
            <div className="text">{text}</div>
            <div className="icons">
                <i className="fa-solid fa-pencil" onClick={update}></i>
                
                <i className="fa-regular fa-trash-can" onClick={remove}></i>
                
 
 

            </div>
        </div>
    )
}

export default Item