import React from 'react'
import './collection-preview.style.scss'

const CollectionPreview=({title,items}) => {
    return (
        <div className="colleciton-preview">
            
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item,index)=>index<4)
                    .map((item) =>(
                    <div key={item.id}> {item.name} </div>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
